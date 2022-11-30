from bartender_backend import *
from flask import Flask, request, jsonify

app = Flask(__name__)

bartender = Bartender("dataset/cocktail_all.csv")
bartender.load_analizer()

@app.route("/", methods=["GET", "POST"])
def by_mix():
    if request.method == "GET":
        json_message = request.get_json()
        return bartender.get_recommendation_list(json_message["user_input"], k=json_message["rec_num"])

@app.route("/by_ingredients", methods=["GET", "POST"])
def by_ingredients():
    if request.method == "GET":
        json_message = request.get_json()
        return bartender.get_recommendation_list_by_ingredient(json_message["user_input"], k=json_message["rec_num"])


@app.route("/by_name", methods=["GET", "POST"])
def by_name():
    if request.method == "GET":
        json_message = request.get_json()
        return bartender.get_recommendation_list_by_name(json_message["user_input"], k=json_message["rec_num"])



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)