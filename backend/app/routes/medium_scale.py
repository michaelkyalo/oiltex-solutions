from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required
from app.models import Crop, Livestock

medium_bp = Blueprint("medium_scale", __name__)

@medium_bp.route("/", methods=["GET"])
@jwt_required()
def get_medium_scale_data():
    """
    Return data for medium scale farms
    Criteria:
      - Crops: 20 to 50 units (assume 'quantity' attribute exists or default)
      - Livestock: 20 to 50 units
    """
    crops = Crop.query.all()
    livestock = Livestock.query.all()

    medium_crops = [
        c.name for c in crops 
        if getattr(c, 'quantity', 30) >= 20 and getattr(c, 'quantity', 30) <= 50
    ]

    medium_livestock = [
        l.type for l in livestock 
        if 20 <= l.quantity <= 50
    ]

    return jsonify({
        "medium_crops": medium_crops,
        "medium_livestock": medium_livestock
    })
