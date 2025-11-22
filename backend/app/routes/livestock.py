from flask import Blueprint, request, jsonify
from app import db
from app.models import Livestock
from flask_jwt_extended import jwt_required

livestock_bp = Blueprint("livestock", __name__)

@livestock_bp.route("/", methods=["GET"])
@jwt_required()
def get_livestock():
    animals = Livestock.query.all()
    return jsonify([{
        "id": a.id,
        "type": a.type,
        "quantity": a.quantity,
        "health_status": a.health_status
    } for a in animals])

@livestock_bp.route("/", methods=["POST"])
@jwt_required()
def add_livestock():
    data = request.get_json()
    new_animal = Livestock(
        type=data["type"],
        quantity=data["quantity"],
        health_status=data.get("health_status", "healthy")
    )
    db.session.add(new_animal)
    db.session.commit()
    return jsonify({"msg": "Livestock added", "id": new_animal.id})

@livestock_bp.route("/<int:id>", methods=["PUT"])
@jwt_required()
def update_livestock(id):
    animal = Livestock.query.get_or_404(id)
    data = request.get_json()
    animal.type = data.get("type", animal.type)
    animal.quantity = data.get("quantity", animal.quantity)
    animal.health_status = data.get("health_status", animal.health_status)
    db.session.commit()
    return jsonify({"msg": "Livestock updated"})

@livestock_bp.route("/<int:id>", methods=["DELETE"])
@jwt_required()
def delete_livestock(id):
    animal = Livestock.query.get_or_404(id)
    db.session.delete(animal)
    db.session.commit()
    return jsonify({"msg": "Livestock deleted"})
