import React from 'react';
import { connect } from 'react-redux';

import Title from '../../components/Title';

import {
  getLeanMassSelector,
  getCategoryTypeSelector,
  getFreeMealsSelector
   } from '../../selectors/selectors.js';

function mapStateToProps({calculator}) {
  return {
    leanMass: getLeanMassSelector(calculator),
    categoryType: getCategoryTypeSelector(calculator),
    freeMeals: getFreeMealsSelector(calculator)
  };
}

function mapDispatchToProps() {
  return {
  };
}

const Results = ({leanMass, categoryType, freeMeals}) => {
  return (
    <div className="mx2 flex justify-between flex-column">
      <div>
        <Title>Results</Title>
        <p>Lean Mass: {leanMass}</p>
        <p>Category Type: {categoryType} </p>
        <p>Free Meals: {freeMeals}</p>
      </div>

    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Results);
