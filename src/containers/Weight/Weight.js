import React from 'react';
import { connect } from 'react-redux';

import './Weight.css';
import { updateWeight } from '../../utils/utils';
import { getWeightKgSelector } from '../../selectors/selectors.js';

import Input from '../../components/Input';
import Description from '../../components/Description';
import Title from '../../components/Title';
import Button from '../../components/Button';

function mapStateToProps({calculator}) {
  return {
    weightLbs: calculator.weightLbs,
    weightKgs: getWeightKgSelector(calculator)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (e) => dispatch(updateWeight(e.target.value))
  };

}

const Weight = ({weightLbs, weightKgs, onChange}) => {
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
            <Input
            name="weight"
            type="number"
            pattern="[0-9]*"
            unit="lbs"
            defaultValue={weightLbs}
            onChange={onChange}
            />
            <p className="grey lato h6"> {weightKgs} Kg</p>
        </form>
      </div>
      <Button path="bodyfat"/>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Weight);
