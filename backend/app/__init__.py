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
    app = Flask(__name__)
    app.config.from_object(Config)

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)

    # Import blueprints
    from app.routes.auth import auth_bp
    from app.routes.crops import crops_bp
    from app.routes.livestock import livestock_bp
    from app.routes.tasks import tasks_bp
    from app.routes.weather import weather_bp
    from app.routes.market import market_bp
    from app.routes.inventory import inventory_bp
    from app.routes.large_scale import large_bp
    from app.routes.medium_scale import medium_bp
    from app.routes.small_scale import small_bp

    # Register blueprints
    app.register_blueprint(auth_bp, url_prefix="/api/auth")
    app.register_blueprint(crops_bp, url_prefix="/api/crops")
    app.register_blueprint(livestock_bp, url_prefix="/api/livestock")
    app.register_blueprint(tasks_bp, url_prefix="/api/tasks")
    app.register_blueprint(weather_bp, url_prefix="/api/weather")
    app.register_blueprint(market_bp, url_prefix="/api/market")
    app.register_blueprint(inventory_bp, url_prefix="/api/inventory")
    app.register_blueprint(large_bp, url_prefix="/api/large-scale")
    app.register_blueprint(medium_bp, url_prefix="/api/medium-scale")
    app.register_blueprint(small_bp, url_prefix="/api/small-scale")

    # Optional health check
    @app.route("/api/health")
    def health():
        return {"status": "ok"}, 200

    return app
