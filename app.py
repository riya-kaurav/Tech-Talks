# from flask import Flask, request, jsonify
# from models import db, Experience, Tip, Question

# app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///techtalks.db'
# db.init_app(app)

# with app.app_context():
#     db.create_all()

# @app.route('/api/experiences', methods = ['GET','POST'])
# def experiences():
#     if request.method == 'POST':
#         data = request.json
#         exp = Experience(**data)
#         db.session.add(exp)
#         db.session.commit()
#         return jsonify({'id': exp.id}), 201
#     exps = Experience.query.all()
#     return jsonify([{'id': e.id, 'company': e.company,'role': e.role,'content': e.content} for e in exps])

# @app.route('/api/tips',methods = ['GET', 'POST'])
# def tips():
#     if request.method == 'POST':
#         data = request.json
#         tip = Tip(text = data['text'])
#         db.session.add(tip)
#         db.session.commit()
#         return jsonify({'id': tip.id}), 201
#     tips = Tip.query.all()
#     return jsonify([{'id': t.id,'text': t.text}for t in tips])

# @app.route('/api/questions', methods = ['GET', 'POST'])
# def questions():
#     if request.method == 'POST':
#         data = request.json
#         q = Question(question = data["question"])
#         db.session.add(q)
#         db.session.commit()
#         return jsonify({'id':q.id}), 201
#     questions = Question.query.all()
#     return jsonify([{'id':q.id,'question': q.question}for q in questions])

# import os 

# if __name__ == '__main__':
#     port = int(os.environ.get('PORT', 5000))
#     app.run(debug = False, host = '0.0.0.0', port = port)
      


from flask import Flask, request, jsonify
from flask_cors import CORS
from models import db, Experience, Tip, Question
import os

app = Flask(__name__)
CORS(app)  # 🔥 Enables cross-origin requests from frontend

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///techtalks.db'
db.init_app(app)

with app.app_context():
    db.create_all()

@app.route('/api/experiences', methods=['GET', 'POST'])
def experiences():
    if request.method == 'POST':
        data = request.json
        exp = Experience(**data)
        db.session.add(exp)
        db.session.commit()
        return jsonify({'id': exp.id}), 201

    exps = Experience.query.all()
    return jsonify([
        {'id': e.id, 'company': e.company, 'role': e.role, 'content': e.content}
        for e in exps
    ])

@app.route('/api/tips', methods=['GET', 'POST'])
def tips():
    if request.method == 'POST':
        data = request.json
        tip = Tip(text=data['text'])
        db.session.add(tip)
        db.session.commit()
        return jsonify({'id': tip.id}), 201

    tips = Tip.query.all()
    return jsonify([
        {'id': t.id, 'text': t.text}
        for t in tips
    ])

@app.route('/api/questions', methods=['GET', 'POST'])
def questions():
    if request.method == 'POST':
        data = request.json
        q = Question(question=data['question'])
        db.session.add(q)
        db.session.commit()
        return jsonify({'id': q.id}), 201

    questions = Question.query.all()
    return jsonify([
        {'id': q.id, 'question': q.question}
        for q in questions
    ])

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(debug=False, host='0.0.0.0', port=port)
