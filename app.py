from flask import Flask, render_template
from static.python.get_portfolio_data import get_portfolio_data

app = Flask(__name__)

@app.route('/')
def home():
   portfolio_data = get_portfolio_data()
   return render_template('index.html', data=portfolio_data)

if __name__ == '__main__':
   app.run(debug=True)