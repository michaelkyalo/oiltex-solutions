from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required

weather_bp = Blueprint("weather", __name__)

# For simplicity, returning static weather data
# Later you can integrate with an API like OpenWeatherMap
@weather_bp.route("/", methods=["GET"])
@jwt_required()
def get_weather():
    weather_data = {
        "temperature": "28°C",
        "condition": "Sunny",
        "chance_of_rain": "10%"
    }
    return jsonify(weather_data)
