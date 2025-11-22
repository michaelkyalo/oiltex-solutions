from flask import Blueprint, request, jsonify
from app import db
from app.models import Task
from flask_jwt_extended import jwt_required

tasks_bp = Blueprint("tasks", __name__)

@tasks_bp.route("/", methods=["GET"])
@jwt_required()
def get_tasks():
    tasks = Task.query.all()
    return jsonify([{
        "id": t.id,
        "title": t.title,
        "description": t.description,
        "due_date": t.due_date,
        "completed": t.completed
    } for t in tasks])

@tasks_bp.route("/", methods=["POST"])
@jwt_required()
def add_task():
    data = request.get_json()
    new_task = Task(
        title=data["title"],
        description=data.get("description"),
        due_date=data.get("due_date"),
        completed=data.get("completed", False)
    )
    db.session.add(new_task)
    db.session.commit()
    return jsonify({"msg": "Task added", "id": new_task.id})

@tasks_bp.route("/<int:id>", methods=["PUT"])
@jwt_required()
def update_task(id):
    task = Task.query.get_or_404(id)
    data = request.get_json()
    task.title = data.get("title", task.title)
    task.description = data.get("description", task.description)
    task.due_date = data.get("due_date", task.due_date)
    task.completed = data.get("completed", task.completed)
    db.session.commit()
    return jsonify({"msg": "Task updated"})

@tasks_bp.route("/<int:id>", methods=["DELETE"])
@jwt_required()
def delete_task(id):
    task = Task.query.get_or_404(id)
    db.session.delete(task)
    db.session.commit()
    return jsonify({"msg": "Task deleted"})
