import React from 'react';
import { connect } from 'react-redux';

import Description from '../../components/Description';
import Title from '../../components/Title';
import Button from '../../components/Button';
import { ACTIVITY_OPTIONS } from './activity-options';

import { updateActivity } from '../../utils/utils';

function mapStateToProps({calculator}) {
  return {
    bodyfat: calculator.bodyfat,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (e) => dispatch(updateActivity(e.target.value))
  };
}

const Activity = ({onChange}) => {
  let options = ACTIVITY_OPTIONS
    .map((option, key) => <option key={key} value={option}>{option}</option>);

  return (
    <div className="mx2 flex justify-between flex-column">
      <div>
        <Title>Activity Type</Title>
        <Description>
          This will help us decide how many total calories you need.
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

      <Button/>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Activity);
