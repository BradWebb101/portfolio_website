from flask import Flask, render_template
from static.python.get_portfolio_data import get_portfolio_data

app = Flask(__name__)

@app.route('/')
def home():
   return render_template('index.html')

if __name__ == '__main__':
   app.run(debug=True)