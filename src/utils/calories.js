import {
  CATEGORY_1,
  CATEGORY_2,
  CATEGORY_3,

  INACTIVE,
  AEROBIC,
  WEIGHT_TRAINING,

  CARB_LIMIT,
  FAT_LIMIT,
  PREWORKOUT_CARB_LIMIT,
  POSTWORKOUT_CARB_LIMIT
} from './constants';

import {
  proteinToKcals,
  carbsToKcals,
  fatToKcals
} from './conversions';

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

export function getCarbsInGrams() {
  return CARB_LIMIT;
}


export function getFatInGrams() {
  return FAT_LIMIT;
}

export function getPreworkoutCarbsInGrams() {
  return PREWORKOUT_CARB_LIMIT;
}

export function getPostWorkoutCarbsInGrams() {
  return POSTWORKOUT_CARB_LIMIT;
}

export function getTotalCalories(protein, carbs = 20, fat = 20) {
  return proteinToKcals(protein) +
  carbsToKcals(carbs) +
  fatToKcals(fat);
}


