import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="mx2 flex justify-between flex-column">
        <div className="description">
          <h2 className="lato center">How much do you weigh?</h2>
          <p className="open-sans center greyed-out">This will help us calculate your lean mass and total calorie intake</p>
        </div>

        <div className="mb4">
          <form
          name="calculator"
          className="lato center py2">
            <div>
              <input
              name="weight"
              className="h2 my2 px0 py1"
              type="number"
              pattern="[0-9]*"
              placeholder="150"/>
              <span className="lato grey h3">lbs</span>
              <p className="grey lato h6"> 82 Kg</p>
            </div>
          </form>
        </div>

        <button className="uppercase my3 px3 py2 h6 bg-blue white">Continue</button>
      </div>
    );
  }
}

export default App;
