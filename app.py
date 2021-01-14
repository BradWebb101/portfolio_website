from flask import Flask, render_template
from static.python import portfolio_data

app = Flask(__name__)

@app.route('/')
def home():
   data = portfolio_data.data
   return render_template('index.html', data=data)

if __name__ == '__main__':
   app.run()