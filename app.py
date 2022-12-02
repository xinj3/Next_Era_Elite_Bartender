from bartender_backend import *
from flask import Flask, request, jsonify
from flask_cors import cross_origin

app = Flask(__name__)

bartender = Bartender("dataset/cocktail_all.csv")
bartender.load_analizer()

@app.route("/by_mix", methods=["GET", "POST"])
@cross_origin()
def by_mix():
    if request.method == "POST":
        json_message = request.get_json()
        print("/by_mix:", json_message)
        return bartender.get_recommendation_list(json_message["user_input"].upper())

@app.route("/by_ingredients", methods=["GET", "POST"])
@cross_origin()
def by_ingredients():
    if request.method == "POST":
        json_message = request.get_json()
        print("/by_ingredients:", json_message)
        return bartender.get_recommendation_list_by_ingredient(json_message["user_input"].upper())


@app.route("/by_name", methods=["GET", "POST"])
@cross_origin()
def by_name():
    if request.method == "POST":
        json_message = request.get_json()
        print("/by_name:", json_message)
        return bartender.get_recommendation_list_by_name(json_message["user_input"].upper())



if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)

    