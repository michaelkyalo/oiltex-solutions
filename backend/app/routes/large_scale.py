from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required
from app.models import Crop, Livestock

large_bp = Blueprint("large_scale", __name__)

@large_bp.route("/", methods=["GET"])
@jwt_required()
def get_large_scale_data():
    """Return data for large scale farms"""
    crops = Crop.query.all()
    livestock = Livestock.query.all()

    # Only include farms with >50 crops or >50 livestock
    large_crops = [c.name for c in crops if getattr(c, 'quantity', 100) > 50]  # optional quantity attr
    large_livestock = [l.type for l in livestock if l.quantity > 50]

    return jsonify({
        "large_crops": large_crops,
        "large_livestock": large_livestock
    })
