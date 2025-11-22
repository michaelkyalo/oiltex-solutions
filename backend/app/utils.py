from flask import jsonify
from datetime import datetime

def format_date(dt):
    """Convert datetime object to string."""
    if dt:
        return dt.strftime("%Y-%m-%d %H:%M:%S")
    return None

def response_success(message, data=None):
    """Standard success response."""
    resp = {"status": "success", "msg": message}
    if data is not None:
        resp["data"] = data
    return jsonify(resp), 200

def response_error(message, code=400):
    """Standard error response."""
    return jsonify({"status": "error", "msg": message}), code

def calculate_total_inventory(items):
    """Calculate total quantity/value of inventory."""
    total_quantity = sum([item.get("quantity", 0) for item in items])
    total_value = sum([item.get("quantity", 0) * item.get("price", 0) for item in items])
    return {"total_quantity": total_quantity, "total_value": total_value}
