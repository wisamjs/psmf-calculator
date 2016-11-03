import {
  CATEGORY_1,
  CATEGORY_2,
  CATEGORY_3,

  INACTIVE,
  AEROBIC,
  WEIGHT_TRAINING
} from './constants';

export function getProteinInGrams(leanMass, bodyFatCategory, trainingCategory) {
  if (bodyFatCategory === CATEGORY_1) {
    switch (trainingCategory) {
      case WEIGHT_TRAINING:
        return Math.floor(2 * leanMass);
      case AEROBIC:
        return Math.floor(1.5 * leanMass);
      case INACTIVE:
        return Math.floor(1.25 * leanMass);
      default:
        return 0;
    }

  }

  if (bodyFatCategory === CATEGORY_2) {
    switch (trainingCategory) {
      case INACTIVE:
        return Math.floor(0.9 * leanMass);
      case AEROBIC:
        return Math.floor(1.1 * leanMass);
      case WEIGHT_TRAINING:
        return Math.floor(1.25 * leanMass);
      default:
        return 0;
    }
  }

  if (bodyFatCategory === CATEGORY_3) {
    switch (trainingCategory) {
      case INACTIVE:
        return Math.floor(0.8 * leanMass);
      case AEROBIC:
        return Math.floor(0.9 * leanMass);
      case WEIGHT_TRAINING:
        return Math.floor(1 * leanMass);
      default:
        return 0;
    }
  }

}
