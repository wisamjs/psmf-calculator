import { createSelector } from 'reselect';
import { toKg } from '../utils/conversions';
import { getLeanMass } from '../utils/bodystats';
import { getCategory, getNumOfFreeMeals, getRefeedDetails, getFullDietBreak } from '../utils/categories';
import { getProteinInGrams } from '../utils/calories';

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
