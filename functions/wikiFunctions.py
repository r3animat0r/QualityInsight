# Schnittstelle: https://www.mediawiki.org/wiki/API:Main_page
# https://ores.wikimedia.org/v3/#!/scoring/get_v3_scores_context_revid_model

import os.path
import mwapi
import articlequality
import numpy as np
import json
from datetime import datetime
from lime.lime_tabular import LimeTabularExplainer

import requests # https://www.mediawiki.org/wiki/API:Revisions#Example_1:_Get_revision_data_of_several_pages

S = requests.Session()
URL = "https://en.wikipedia.org/w/api.php"

""" from revscoring import Model
from revscoring.extractors import api
from revscoring.utilities.util import read_observations # Get training set """

""" model_path = os.path.expanduser("~/articlequality/models/enwiki.nettrom_wp10.gradient_boosting.model")
sm = Model.load(open(model_path), error_on_env_check=False)
extractor = api.Extractor(mwapi.Session("https://en.wikipedia.org", user_agent="get-articlequality")) """

""" from revscoring.utilities.util import read_observations # get training data """

""" observations = list(read_observations(open(os.path.expanduser("~/articlequality/datasets/enwiki.labeling_revisions.nettrom_30k.json"))))
 """
# searchs for articls that fit the search-term 
# and returns the titles and links (max. 10)
def searchArticle(text):
    params = {
        "action": "opensearch",
        "namespace": "0",
        "search": text,
        "limit": "10",
        "format": "json"
    }
    r = S.get(url=URL, params=params)
    data = r.json()

    # results in a list of dicts
    articles = []
    for i in range(0, len(data[1])):
        articles.append({"key": "a" + str(i), "articleName": data[1][i], "articleURL": data[3][i]})
    
    return articles

# gets the ten most recent revisions
def getArticleVersions(article):
    # https://stackoverflow.com/questions/34411896/how-to-get-full-wikipedia-revision-history-list-from-some-article
    params = {
        "action": "query",
        "prop": "revisions",
        "titles": article,
        "rvlimit": "10",
        "rvprop": "timestamp|user|comment|ids",
        "rvdir": "older",
        "rvexcludeuser": "SSethi (WMF)",
        "rvslots": "main",
        "formatversion": "2",
        "format": "json"
    }


    r = S.get(url=URL, params=params)
    data = r.json()
    revisions = data['query']['pages'][0]['revisions']

    # format timestamp
    for i in range(0, len(revisions)):
        timestamp = datetime.strptime(revisions[i]['timestamp'], '%Y-%m-%dT%H:%M:%SZ')
        revisions[i]['timestamp'] = timestamp.strftime("%d %B %Y, %H:%M:%S")
        revisions[i]['key'] = "r" + str(i)

    return revisions