from datetime import datetime
from flask import current_app
from flaskapp import login_manager
from flaskapp import db 
from flask_login import UserMixin
from flask_sqlalchemy import SQLAlchemy


# Flask Login Manager
@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

# USER DATABASE CLASS
class User(UserMixin, db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(15), unique=True)
    email = db.Column(db.String(50), unique=True)
    password = db.Column(db.String(80))


# POSTS DATABASE CLASS
class Posts(db.Model):
    __tablename__ = "MyPosts"
    id = db.Column(db.Integer, primary_key = True)
    title  = db.Column(db.String(200))
    content  = db.Column(db.Text())
    author = db.Column(db.String(200))
    date_posted = db.Column(db.DateTime,nullable = False,default = datetime.utcnow)    
    def __init__(self,title,content,author):
        self.title = title
        self.content = content
        self.author = author

