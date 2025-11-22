from flask import Blueprint, request, jsonify
from app import db
from app.models import Crop
from flask_jwt_extended import jwt_required

crops_bp = Blueprint("crops", __name__)

@crops_bp.route("/", methods=["GET"])
@jwt_required()
def get_crops():
    crops = Crop.query.all()
    return jsonify([{
        "id": c.id,
        "name": c.name,
        "planted_date": c.planted_date,
        "expected_harvest": c.expected_harvest,
        "status": c.status
    } for c in crops])

@crops_bp.route("/", methods=["POST"])
@jwt_required()
def add_crop():
    data = request.get_json()
    new_crop = Crop(
        name=data["name"],
        expected_harvest=data.get("expected_harvest")
    )
    db.session.add(new_crop)
    db.session.commit()
    return jsonify({"msg": "Crop added", "id": new_crop.id})
