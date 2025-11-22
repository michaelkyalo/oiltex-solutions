from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required
from app.models import Crop, Livestock

small_bp = Blueprint("small_scale", __name__)

@small_bp.route("/", methods=["GET"])
@jwt_required()
def get_small_scale_data():
    """
    Return data for small scale farms
    Criteria:
      - Crops: less than 20 units
      - Livestock: less than 20 units
    """
    crops = Crop.query.all()
    livestock = Livestock.query.all()

    small_crops = [
        c.name for c in crops 
        if getattr(c, 'quantity', 10) < 20
    ]

    small_livestock = [
        l.type for l in livestock 
        if l.quantity < 20
    ]

    return jsonify({
        "small_crops": small_crops,
        "small_livestock": small_livestock
    })
