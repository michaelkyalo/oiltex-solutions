from flask import Blueprint, request, jsonify
from app import db
from app.models import MarketItem
from flask_jwt_extended import jwt_required

market_bp = Blueprint("market", __name__)

@market_bp.route("/", methods=["GET"])
@jwt_required()
def get_market_items():
    items = MarketItem.query.all()
    return jsonify([{
        "id": i.id,
        "name": i.name,
        "price": i.price,
        "quantity": i.quantity
    } for i in items])

@market_bp.route("/", methods=["POST"])
@jwt_required()
def add_market_item():
    data = request.get_json()
    new_item = MarketItem(
        name=data["name"],
        price=data["price"],
        quantity=data.get("quantity", 0)
    )
    db.session.add(new_item)
    db.session.commit()
    return jsonify({"msg": "Market item added", "id": new_item.id})

@market_bp.route("/<int:id>", methods=["PUT"])
@jwt_required()
def update_market_item(id):
    item = MarketItem.query.get_or_404(id)
    data = request.get_json()
    item.name = data.get("name", item.name)
    item.price = data.get("price", item.price)
    item.quantity = data.get("quantity", item.quantity)
    db.session.commit()
    return jsonify({"msg": "Market item updated"})

@market_bp.route("/<int:id>", methods=["DELETE"])
@jwt_required()
def delete_market_item(id):
    item = MarketItem.query.get_or_404(id)
    db.session.delete(item)
    db.session.commit()
    return jsonify({"msg": "Market item deleted"})
