import React from 'react';
import { connect } from 'react-redux';

import './Weight.css';
import { updateWeight } from '../../utils/utils';
import { getWeightKgSelector } from '../../selectors/selectors.js';

import Description from '../../components/Description';
import Title from '../../components/Title';
import Button from '../../components/Button';
import Dial from '../../components/Dial/Dial';

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
    <div className="mx3 flex flex-column">
      <div>
        <Title>How much do you weigh?</Title>
        <Description>
          This will help us calculate your lean mass and total calorie intake
        </Description>
      </div>

      <div className="mb4">
        <Dial
        primaryValue={weightLbs}
        primaryUnit="lbs"
        secondaryValue={weightKgs}
        secondaryUnit="Kg"
        onChange={onChange}/>
      </div>
      <Button path="bodyfat"/>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Weight);
