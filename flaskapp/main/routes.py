from flask import render_template, request, Blueprint
from flaskapp.models import Posts

main = Blueprint('main', __name__)

# HOMEPAGE ROUTE
@main.route("/")
def index():
    return render_template('index.html')

# ERROR PAGE ROUTE
@main.route("/error")
def error():
    return render_template("error.html")


