# Schnittstelle: https://www.mediawiki.org/wiki/API:Main_page
# https://ores.wikimedia.org/v3/#!/scoring/get_v3_scores_context_revid_model

import os.path
import pandas as pd
import numpy as np
import json
import mwapi 

import articlequality
from revscoring import Model
from revscoring.extractors import api
from revscoring.utilities.util import read_observations # Get training set

from lime.lime_text import LimeTextExplainer

model_path = os.path.realpath("functions/articlequality/models/enwiki.nettrom_wp10.gradient_boosting.model")
sm = Model.load(open(model_path), error_on_env_check=False)
extractor = api.Extractor(mwapi.Session("https://en.wikipedia.org", user_agent="ORES-LIME demo"))

observations = list(read_observations(open(os.path.realpath("functions/articlequality/datasets/enwiki.labeling_revisions.nettrom_30k.json"))))

def getVersionScore(revID):
    features = [str(f) for f in sm.features]
    feature_values = np.array(list(extractor.extract(revID, sm.features)))

    return sm.score(feature_values), feature_values, features

def getExplaination(prediction, feature_values, features):
    # Training data to numpy matrix for lime
    train = [[]]
    for i in range(0,len(observations)):
        train[0].append(observations[i]['wp10'])
        #train[1].append(observations[i]['rev_id'])
    train = np.array(train)

    print(train)
    """ train = np.array([np.array([o["wp"][k] for k in features]) for o in observations]) """
    # Identify which features are booleans.
    feature_return_types = np.array([f.returns for f in sm.features])
    categorical_features = np.where(feature_return_types == bool)[0]
    #print(categorical_features, features)

    # build explainer
    """ explainer = LimeTabularExplainer(
        train,
        mode='classification',
        feature_names=features,
        categorical_features=categorical_features,
        class_names=["B","C","FA","GA","Start","Stub"],
        discretize_continuous=False
    )

    predicted_label = int(prediction["prediction"])
    exp = explainer.explain_instance(
        np.array(feature_values),
        score,
        num_features=25,
        labels=(predicted_label,)
    )
    fig = exp.as_pyplot_figure(label=predicted_label) """
    return # exp.as_list(label=predicted_label)

# Test
prediction, feature_values, features = getVersionScore(1032049478)
print(prediction, feature_values)
getExplaination(prediction, feature_values, features)