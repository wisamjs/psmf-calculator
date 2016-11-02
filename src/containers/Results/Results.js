import React from 'react';
import { connect } from 'react-redux';

import Title from '../../components/Title';

import {
  getLeanMassSelector,
  getCategoryTypeSelector
   } from '../../selectors/selectors.js';

function mapStateToProps({calculator}) {
  return {
    leanMass: getLeanMassSelector(calculator),
    categoryType: getCategoryTypeSelector(calculator)
  };
}

function mapDispatchToProps() {
  return {
  };
}

const Results = ({leanMass, categoryType}) => {
  return (
    <div className="mx2 flex justify-between flex-column">
      <div>
        <Title>Results</Title>
        <p>Lean Mass: {leanMass}</p>
        <p>Category Type: {categoryType} </p>
      </div>

    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Results);
