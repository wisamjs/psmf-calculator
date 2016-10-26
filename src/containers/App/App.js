import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import { updateWeight } from '../../utils/utils';
import { getWeightKg } from '../../selectors/conversions';

import Input from '../../components/Input';
import Description from '../../components/Description';
import Title from '../../components/Title';

function mapStateToProps({calculator}) {
  return {
    weightLbs: calculator.weightLbs,
    weightKgs: getWeightKg(calculator)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (e) => dispatch(updateWeight(e.target.value))
  };

}

const App = ({weightLbs, weightKgs, onChange}) => {
  return (
    <div className="mx2 flex justify-between flex-column">
      <div>
        <Title>How much do you weigh?</Title>
        <Description>
          This will help us calculate your lean mass and total calorie intake
        </Description>
      </div>

      <div className="mb4">
        <form
        name="calculator"
        className="lato center py2">
          <div>
            <Input
            name="weight"
            type="number"
            pattern="[0-9]*"
            placeholder="150"
            onChange={onChange}
            />
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
