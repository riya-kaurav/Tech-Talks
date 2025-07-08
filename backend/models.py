from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Experience(db.Model):
    id = db.Column(db.Integer, primary_key= True)
    company = db.Column(db.String(100))
    role = db.Column(db.String(100))
    content = db.Column(db.Text)

class Tip(db.Model):
    id = db.Column(db.Integer, primary_key= True)
    text = db.Column(db.Text)

class Question(db.Model):
    id = db.Column(db.Integer, primary_key= True)
    question = db.Column(db.Text)