import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import Input from '../../components/Input';

function mapStateToProps(state) {
  return {
    weightLbs: state.calculator.weightLbs,
    weightKgs: state.calculator.weightKgs
  };
}

function mapDispatchToProps() {
  return {
  };

}

const App = ({weightLbs, weightKgs}) => {
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
            <Input/>
            <span className="lato grey h3">lbs</span>
            <p className="grey lato h6"> {weightKgs} Kg</p>
          </div>
        </form>
      </div>

      <button className="uppercase my3 px3 py2 h6 bg-blue white">Continue</button>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(App);
