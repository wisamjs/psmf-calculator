import { createSelector } from 'reselect';
import { toKg, carbsToKcals, fatToKcals } from '../utils/conversions';
import { getLeanMass } from '../utils/bodystats';
import { getCategory, getNumOfFreeMeals, getRefeedDetails, getFullDietBreak } from '../utils/categories';
import { getProteinInGrams, getCarbsInGrams, getFatInGrams, getPreworkoutCarbsInGrams, getPostWorkoutCarbsInGrams, getTotalCalories } from '../utils/calories';

export const getWeight = (state) => state.weightLbs;
export const getBodyfat = (state) => state.bodyfat;
export const getGender = (state) => state.gender;
export const getTraining = (state) => state.training;

export const getWeightKgSelector = createSelector(
  getWeight, (weightLbs) => toKg(weightLbs, 'lbs')
);

export const
  getLeanMassSelector = createSelector(
  getWeight,
  getBodyfat,
  getLeanMass);

export const getCategoryTypeSelector = createSelector(
  getBodyfat,
  getGender,
  getCategory);

export const getFreeMealsSelector = createSelector(
  getCategoryTypeSelector,
  getNumOfFreeMeals);

export const getRefeedDetailsSelector = createSelector(
  getCategoryTypeSelector,
  getRefeedDetails);

export const getFullDietBreakSelector = createSelector(
  getCategoryTypeSelector,
  getFullDietBreak);

export const getProteinInGramsSelector = createSelector(
  getLeanMassSelector,
  getCategoryTypeSelector,
  getTraining,
  getProteinInGrams);

export const getCarbsInGramsSelector = createSelector(getCarbsInGrams);
export const getFatInGramsSelector = createSelector(getFatInGrams);
export const getPWCarbsInGramsSelector = createSelector(getPreworkoutCarbsInGrams);

export const getTotalCaloriesSelector = createSelector(
  getProteinInGramsSelector,
  getCarbsInGramsSelector,
  getFatInGramsSelector,
  getTotalCalories);

export const getPreworkoutCaloriesSelector = createSelector(
  getPreworkoutCarbsInGrams,
  carbsToKcals);

export const getPostWorkoutCaloriesSelector = createSelector(
  getPostWorkoutCarbsInGrams,
  carbsToKcals);

export const getCarbCaloriesSelector = createSelector(
  getCarbsInGramsSelector,
  carbsToKcals);

export const getFatCaloriesSelector = createSelector(
  getFatInGramsSelector,
  fatToKcals);

export const getProteinCaloriesSelector = createSelector(
  getFatInGramsSelector,
  fatToKcals);
