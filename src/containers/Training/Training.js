import React from 'react';
import { connect } from 'react-redux';

import Description from '../../components/Description';
import Title from '../../components/Title';
import Button from '../../components/Button';
import { TRAINING_OPTIONS } from './training-options';

import { updateTraining } from '../../utils/utils';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (e) => dispatch(updateTraining(e.target.value))
  };

}

const Training = ({onChange}) => {
  let options = TRAINING_OPTIONS
    .map((option, key) => <option key={key} value={option.value}>{option.display}</option>);

  return (
    <div className="mx2 flex justify-between flex-column">
      <div>
        <Title>Training</Title>
        <Description>
          This will help us decide how much protein you need.
        </Description>
      </div>

      <div className="mb4">
        <form
        name="calculator"
        className="lato center py2">
          <select
          onChange={onChange}>
            {options}
          </select>
        </form>
      </div>

      <Button path="gender"/>
    </div>
  );
}

export default connect(
  ((mapStateToProps)),
  mapDispatchToProps)(Training);
