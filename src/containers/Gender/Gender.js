import React from 'react';
import { connect } from 'react-redux';

import Description from '../../components/Description';
import Title from '../../components/Title';
import Button from '../../components/Button';
import { GENDER_OPTIONS } from './gender-options';

import { updateGender } from '../../utils/utils';

function mapStateToProps() {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onChange: (e) => dispatch(updateGender(e.target.value))
  };

}

const Gender = ({onChange}) => {
  let options = GENDER_OPTIONS
    .map((option, key) => <option key={key} value={option}>{option}</option>);

  return (
    <div className="mx2 flex justify-between flex-column">
      <div>
        <Title>Gender</Title>
        <Description>
        This will help us get your category type.
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

      <Button path="results"/>
    </div>
  );
}

export default connect(
  ((mapStateToProps)),
  mapDispatchToProps)(Gender);
