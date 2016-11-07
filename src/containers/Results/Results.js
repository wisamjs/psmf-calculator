import React from 'react';
import { connect } from 'react-redux';

import Title from '../../components/Title';

import {
  getLeanMassSelector,
  getCategoryTypeSelector,
  getFreeMealsSelector,
  getRefeedDetailsSelector,
  getFullDietBreakSelector,
  getProteinInGramsSelector,
  getCarbsInGramsSelector,
  getPWCarbsInGramsSelector,
  getFatInGramsSelector,
  getTotalCaloriesSelector
   } from '../../selectors/selectors.js';

function mapStateToProps({calculator}) {
  return {
    leanMass: getLeanMassSelector(calculator),
    categoryType: getCategoryTypeSelector(calculator),
    freeMeals: getFreeMealsSelector(calculator),
    refeedDetails: getRefeedDetailsSelector(calculator),
    fulldietBreak: getFullDietBreakSelector(calculator),
    proteinInGrams: getProteinInGramsSelector(calculator),
    carbsInGrams: getCarbsInGramsSelector(calculator),
    preworkoutCarbsInGrams: getPWCarbsInGramsSelector(calculator),
    fatInGrams: getFatInGramsSelector(calculator),
    totalCalories: getTotalCaloriesSelector(calculator)
  };
}

function mapDispatchToProps() {
  return {
  };
}

const Results = ({leanMass, categoryType, freeMeals, refeedDetails, fulldietBreak, proteinInGrams, carbsInGrams, fatInGrams, preworkoutCarbsInGrams, totalCalories}) => {
  return (
    <div className="mx2 flex justify-between flex-column">
      <div>
        <Title>Results</Title>
        <p>Lean Mass: {leanMass}</p>
        <p>Category Type: {categoryType} </p>
        <p>Free Meals: {freeMeals}</p>
        <p> Refeed Details: {refeedDetails}</p>
        <p> Full Diet Break: {fulldietBreak} </p>

        <Title>Calories</Title>
        <p> Total calories: {totalCalories}</p>
        <p> Protein: {proteinInGrams}</p>
        <p> Carbs: {carbsInGrams}</p>
        <p> Fat: {fatInGrams} </p>
      </div>

    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Results);
