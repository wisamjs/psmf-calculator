import { createSelector } from 'reselect';
import { toKg } from '../utils/conversions';
import { getLeanMass } from '../utils/bodystats';
import { getCategory, getNumOfFreeMeals } from '../utils/categories';

export const getWeight = (state) => state.weightLbs;
export const getBodyfat = (state) => state.bodyfat;
export const getGender = (state) => state.gender;

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
