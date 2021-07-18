# Schnittstelle: https://www.mediawiki.org/wiki/API:Main_page
# https://ores.wikimedia.org/v3/#!/scoring/get_v3_scores_context_revid_model
# partially taken from https://github.com/adamwight/ores-lime/blob/master/Explain%20edit%20quality.ipynb
import os.path
import base64
from io import BytesIO
from matplotlib.pyplot import show
from matplotlib.pyplot import figure
import matplotlib.pyplot as plt, mpld3

import pandas as pd
import numpy as np
import json
import mwapi 
import matplotlib

import articlequality
from revscoring import Model
from revscoring.extractors import api
from revscoring.utilities.util import read_observations # Get training set

from lime.lime_tabular import LimeTabularExplainer

class_names = ["B","C","FA","GA","Start","Stub"]

# model and observation data taken from https://github.com/wikimedia/articlequality/
model_path = os.path.realpath("functions/articlequality/models/enwiki.nettrom_wp10.gradient_boosting.model")
observations = list(read_observations(open(os.path.realpath("functions/articlequality/datasets/enwiki.labeling_revisions.nettrom_30k.json"))))

# load extractor for revscoring
extractor = api.Extractor(mwapi.Session("https://en.wikipedia.org", user_agent="ORES-LIME demo"))
# load model for enwiki
sm = Model.load(open(model_path), error_on_env_check=False)
# get features
features = [str(f) for f in sm.features]

# based on tabular data -> prepared training set for LIME in ./articlequality/training/train.csv
# load training data
data = pd.read_csv(os.path.realpath("functions/articlequality/trainingdata/train.csv"),delimiter=";")
train = data.to_numpy()

def getVersionScore(revID):
    #print(revID)
    feature_values = np.array(list(extractor.extract(revID, sm.features)))
    #print(feature_values)
    return sm.score(feature_values), feature_values

def getExplanation(prediction, feature_values):
    print("Explanation start!")
    explainer = LimeTabularExplainer(
        train,
        mode="classification",
        feature_names=features,
        class_names=class_names,
        discretize_continuous=False
    )

    def score(samples):
        raw_results = [np.array([sm.score(v)["probability"][t] for t in ["B","C","FA","GA","Start","Stub"]]) for v in samples]
        return np.array(raw_results)

    predicted_label = prediction["prediction"]
    exp = explainer.explain_instance(
        np.array(feature_values),
        score,
        num_features=40,
        top_labels=6,
        num_samples=500
    )
    print("LIME is done!")

    # get graphs and info for table for every label
    figures = []
    tables = []
    for i in range(0,6):
        # graph
        fig = exp.as_pyplot_figure(label=i)
        fig.set_size_inches(20, 10)
        plt.tight_layout()
        #fig.savefig('lime' + str(i) + '.png', transparent=False, dpi=100)
        
        tmpfile = BytesIO()
        fig.savefig(tmpfile, format='png', transparent=True)
        encoded = base64.b64encode(tmpfile.getvalue()).decode('utf-8')
        figures.append(encoded)
        plt.close('all')

        # table
        tables.append(exp.as_list(label=i))
    #exp.save_to_file('lime.html',labels=[0])
    return figures, tables 

# Test
#prediction, feature_values = getVersionScore(1032049478)
#print(prediction, feature_values, len(feature_values))
#getExplaination(prediction, feature_values)
#getExplaination(prediction, feature_values, features)