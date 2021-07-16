import os.path
import mwapi 
import numpy as np
import csv
from revscoring import Model
from revscoring.extractors import api
from revscoring.utilities.util import read_observations # Get training set

# model and observation data taken from https://github.com/wikimedia/articlequality/
model_path = os.path.realpath("functions/articlequality/models/enwiki.nettrom_wp10.gradient_boosting.model")
sm = Model.load(open(model_path), error_on_env_check=False)
observations = list(read_observations(open(os.path.realpath("functions/articlequality/datasets/enwiki.labeling_revisions.nettrom_30k.json"))))

revids = []
for o in observations:
    revids.append(o['rev_id'])
#revids = revids[0:12] # less data for test

# chunk data (has RAM problems with csv.writer)
# later: head -n 1 train0.csv > combined.out && tail -n+2 -q *.csv >> combined.out
chunkSize = 30
print(len(revids) / chunkSize)
revChunks = [revids[i:i + int(len(revids) / chunkSize)] for i in range(0, len(revids), int(len(revids) / chunkSize))]

# extract features from observed data and safe 
extractor = api.Extractor(mwapi.Session("https://en.wikipedia.org", user_agent="ORES-LIME demo"))

for i in range(0,len(revChunks)):
    rawTrain = list(extractor.extract(revChunks[i],sm.features))
    train = []
    train.append(sm.features)
    for t in rawTrain:
        if isinstance(t[1], list):
            train.append(t[1])
    with open("functions/articlequality/datasets/train" + str(i) + ".csv", "w+") as my_csv:
        csvWriter = csv.writer(my_csv, delimiter=';')
        csvWriter.writerows(train)
    print("Finished Chunk" + str(i))

print("Finished!")