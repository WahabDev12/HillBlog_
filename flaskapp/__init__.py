from flask import Flask,Blueprint
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flaskapp.config import Config
from flask_bootstrap import Bootstrap


db = SQLAlchemy()
bootstrap = Bootstrap()

login_manager = LoginManager()
login_manager.login_view = 'users.login'
login_manager.login_message_category = 'info'

# Create app function
def create_app(config_class=Config):
    app = Flask(__name__)
    #Import Config class from config.py
    app.config.from_object(Config)
    app.config["SECRET_KEY"] = "Moblit X Hange"
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///database.db"
    
    # Extensions
    db.init_app(app)
    bootstrap.init_app(app)
    login_manager.init_app(app)
    
    # Importing users Blueprint from routes.py
    from flaskapp.users.routes import users
    from flaskapp.posts.routes import posts_blueprint
    from flaskapp.main.routes import main
    
    # Registering Blueprints
    app.register_blueprint(users)
    app.register_blueprint(posts_blueprint)
    app.register_blueprint(main)
  

    return app