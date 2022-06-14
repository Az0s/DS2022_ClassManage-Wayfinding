'''
Date: 2022-03-26 16:39:12
LastEditors: Azus
LastEditTime: 2022-06-14 17:00:40
FilePath: /DS/backend/app.py
'''

import os

from flask import Flask, render_template, request, jsonify, make_response
from reverseProxy import proxyRequest
from handleStudents import handleStudents



MODE = os.getenv('FLASK_ENV')
# dest for reverse proxy
DEV_SERVER_URL = 'http://localhost:3000/'

# !modify 
MODE = 'development'

app = Flask(__name__, static_folder='../../frontend/build/static', template_folder='../../frontend/build')

# Ignore static folder in development mode.
if MODE == "development":
    app = Flask(__name__, static_folder=None)

@app.route('/')
@app.route('/<path:path>')
def index(path=''):
    if MODE == 'development':
        print("running in proxyRequest")
        return proxyRequest(DEV_SERVER_URL, path)
    else:
        print("running in templates")
        return render_template("index.html")    

# 通过URL进行参数传递
# /d/?wd=123
@app.route('/d/')
def d():
    # wd = request.args["wd"]
    args = request.args
    return f"通过URL查询传递的参数是wd= {args}"

@app.route('/api/student/', methods=['POST', 'GET'])
def api_student():
    # form_data = request.form
    json = request.json
    # data ={
    #     "from_data": f'{form_data}',
    #     "json": f'{json}'
    # }
    data= {
        "data": handleStudents(4, (json["username"]))}
    print(json["username"])
    # response = make_response(jsonify(data))
    # response.headers['Access-Control-Allow-Origin'] = '*'
    # print(response)
    return jsonify(data), 200, [("Access-Control-Allow-Origin", "*")]
    # handleStudents

# if this is the main thread of execution first load the model and
# then start the server
if __name__ == "__main__":
    print("Starting backend server of Course Suppport")
    app.run(host='127.0.0.1', port=5000, debug=True)
