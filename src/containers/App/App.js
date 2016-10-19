import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="description">
          <h2 className="lato">How much do you weigh?</h2>
          <p className="open-sans greyed-out">This will help us calculate your lean mass and total calorie intake</p>
        </div>

        <div className="forms">
          <form
          name="calculator"
          id="calculator"
          className="lato">
            <div className="field">
              <input
              name="weight"
              type="number"
              pattern="[0-9]*"
              placeholder="150"/>
              <span className="lato greyed-out fs21">lbs</span>
              <p className="greyed-out lato fs12"> 82 Kg</p>
            </div>
          </form>
        </div>

        <button>Continue</button>
      </div>
    );
  }
}

export default App;
