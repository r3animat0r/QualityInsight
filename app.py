from flask import Flask, send_from_directory, request
import flask
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from api.ApiHandler import ApiHandler

from functions.wikiFunctions import *
from functions.visualization import *

app = Flask(__name__, static_url_path='', static_folder='qualityinsight-frontend/build')
CORS(app) #comment this on deployment
api = Api(app)

@app.route("/", methods = ['POST','GET'])
def home():
    searchTerm = request.args.get('search')
    searchRes = searchArticle(searchTerm)

    return flask.jsonify(searchRes)

@app.route("/found-revisions", methods = ['POST','GET'])
def foundRevisions():
    article = request.args.get('article')
    searchRes = getArticleVersions(article)
    return flask.jsonify(searchRes)

@app.route("/explanation", methods = ['POST', 'GET'])
def explanation():
    revid = request.args.get('revid')
    prediction, feature_values = getVersionScore(int(revid))
    print(prediction)
    fig, tables = getExplanation(prediction, feature_values)
    #print(fig)
    #print(tables)
    return {"prediction": prediction, "fig": fig, "tables": tables}

api.add_resource(ApiHandler, '/')

if __name__ == '__main__':
    app.run(debug = False)