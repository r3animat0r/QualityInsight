from flask import Flask, send_from_directory
import flask
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
from api.ApiHandler import ApiHandler

app = Flask(__name__, static_url_path='', static_folder='qualityinsight-frontend/build')
CORS(app) #comment this on deployment
api = Api(app)

@app.route("/", methods = ['POST','GET'])
def home():
    searchRes = [
        { "articleName": "Free Uni", "articleURL": "en.wikipedia.com 1" },
        { "articleName": "Free Uni 2", "articleURL": "en.wikipedia.com 2" },
        { "articleName": "Free Uni 3", "articleURL": "en.wikipedia.com 3" },
        { "articleName": "Free Uni 4", "articleURL": "en.wikipedia.com 4" },
    ]
    return flask.jsonify(searchRes)

@app.route("/found-revisions", methods = ['POST','GET'])
def foundRevisions():
    searchRes = [
        {
            "ID": "1027689158",
            "user": "username",
            "timestamp": "09 June 2021, 12:01:21",
            "comment":
            "Edit comment here, Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.",
        },
        {
            "ID": "1027689158",
            "user": "username",
            "timestamp": "09 June 2021, 12:01:21",
            "comment": "Edit comment here.",
        },
    ]
    return flask.jsonify(searchRes)

@app.route("/explanation", methods = ['POST', 'GET'])
def explanation():
    return

api.add_resource(ApiHandler, '/flask/hello')