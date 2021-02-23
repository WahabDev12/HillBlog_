from flask import Flask,render_template,redirect,request,url_for,Blueprint
from flask_login import current_user
from flaskapp.main.routes import main
from flaskapp.models import Posts, User
from flaskapp.users.routes import users
from flaskapp import db 

posts_blueprint = Blueprint("posts_blueprint",__name__,static_folder="static",template_folder="templates")


# POSTS ROUTE
@posts_blueprint.route("/posts",methods=["POST","GET"])
def posts():
    if request.method == 'POST':
        title = request.form.get("title")
        content  = request.form.get("content")
        new_post = Posts(title = title,content = content,author = current_user.username)
        db.session.add(new_post)
        db.session.commit()
        return redirect(url_for("users.dashboard"))
    else:
        return render_template("error.html")


#MY POSTS ROUTE
@posts_blueprint.route("/my_post/<int:post_id>",methods=["POST","GET"])
def my_post(post_id):
    post = Posts.query.get_or_404(post_id)
    return render_template("myposts.html",post = post,title = post.title)


# DELETE POSTS 
@posts_blueprint.route("/delete/<int:post_id>")
def delete(post_id):
    post = Posts.query.filter_by(id = post_id).first()
    db.session.delete(post)
    db.session.commit()
    return redirect (url_for("users.dashboard")) 

# UPDATE POSTS
@posts_blueprint.route("/update/<int:post_id>",methods=["POST","GET"])
def update(post_id):
    post = Posts.query.filter_by(id = post_id).first()
    if request.method == 'POST':
        post.title  = request.form.get("title")
        post.content = request.form.get("content")
        try:
            db.session.commit()
            return redirect(url_for("users.dashboard"))
        except:
            return render_template("error.html")
    else:
        flash("Your post has been updated")
        return render_template("update.html", post = post)
