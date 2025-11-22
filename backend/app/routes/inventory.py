from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required
from app.models import Crop, Livestock, MarketItem
from app.utils import format_date, calculate_total_inventory

inventory_bp = Blueprint("inventory", __name__)

@inventory_bp.route("/", methods=["GET"])
@jwt_required()
def get_inventory():
    # Fetch crops
    crops = Crop.query.all()
    crops_data = [
        {
            "id": c.id,
            "name": c.name,
            "planted_date": format_date(c.planted_date),
            "expected_harvest": format_date(c.expected_harvest),
            "status": c.status
        } for c in crops
    ]

    # Fetch livestock
    livestock = Livestock.query.all()
    livestock_data = [
        {
            "id": l.id,
            "type": l.type,
            "quantity": l.quantity,
            "health_status": l.health_status
        } for l in livestock
    ]

    # Fetch market items
    market = MarketItem.query.all()
    market_data = [
        {
            "id": m.id,
            "name": m.name,
            "quantity": m.quantity,
            "price": m.price
        } for m in market
    ]

    # Totals
    total = {
        "crops": len(crops_data),
        "livestock": sum([l['quantity'] for l in livestock_data]),
        "market_items": sum([m['quantity'] for m in market_data]),
    }

    return jsonify({
        "crops": crops_data,
        "livestock": livestock_data,
        "market": market_data,
        "totals": total
    })
