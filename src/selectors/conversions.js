import { createSelector } from 'reselect';
import { toKg } from '../utils/conversions';

export const getWeight = (state) => state.weightLbs;

export const getWeightKg = createSelector(
  getWeight, (weightLbs) => toKg(weightLbs, 'lbs')
);