from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from config import Config

# Initialize extensions
db = SQLAlchemy()
migrate = Migrate()
jwt = JWTManager()

def create_app():
    """
    Create and configure the Flask app
    """
    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialize extensions with app
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)

    # Import Blueprints
    from app.routes.auth import auth_bp
    from app.routes.crops import crops_bp
    from app.routes.livestock import livestock_bp
    from app.routes.tasks import tasks_bp
    from app.routes.weather import weather_bp
    from app.routes.market import market_bp

    # Register Blueprints
    app.register_blueprint(auth_bp, url_prefix="/api/auth")
    app.register_blueprint(crops_bp, url_prefix="/api/crops")
    app.register_blueprint(livestock_bp, url_prefix="/api/livestock")
    app.register_blueprint(tasks_bp, url_prefix="/api/tasks")
    app.register_blueprint(weather_bp, url_prefix="/api/weather")
    app.register_blueprint(market_bp, url_prefix="/api/market")

    # Optional: simple health check
    @app.route("/api/health")
    def health():
        return {"status": "ok"}, 200

    return app
