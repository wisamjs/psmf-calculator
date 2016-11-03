const CATEGORY_1 = 1;
const CATEGORY_2 = 2;
const CATEGORY_3 = 3;

export const REFEED_1 = '2 to 3 full days at the end';
export const REFEED_2 = '5 hours once per week';

export const INACTIVE = 1;
export const AEROBIC = 2;
export const WEIGHT_TRAINING = 3;

export function isCategory1( bf, gender ) {
  return gender === 'male' && bf <= 15
  ||
    gender === 'female' && bf <= 24;
}

export function isCategory2( bf, gender ) {
  return gender === 'male'
    && bf <= 25
    && !isCategory1(bf, gender)
    && !isCategory3(bf, gender)
  ||
    (gender === 'female'
    && bf <= 34
    && !isCategory1(bf, gender)
    && !isCategory3(bf, gender));
}

export function isCategory3(bf, gender ) {
  return gender === 'male' && bf >= 26
  ||
    gender === 'female' && bf >= 35;
}

export function getCategory(bf, gender) {

  if (isCategory1(bf, gender)) {
    return CATEGORY_1;
  }

  if (isCategory2(bf, gender)) {
    return CATEGORY_2;
  }

  if (isCategory3(bf, gender)) {
    return CATEGORY_3;
  }

}

export function getActivityType(activity) {

  if (activity === 'Inactive') {
    return 1;
  }

  if (activity === 'Aerobic') {
    return 2;
  }

  return 3;

}

export function isInactive(activity) {
  return activity === 3 || activity == 'Inactive';
}

export function isAerobic(activity) {
  return activity === 2 || activity == 'Aerobic';
}

export function isWeightTraining(activity) {
  return activity === 1 || activity == 'Weight Training';
}


export function areEqual(a, b){
  return a === b;
}

export function getNumOfFreeMeals(category) {

  if (category === CATEGORY_2) {
    return 1;
  }

  if (category === CATEGORY_3) {
    return 2;
  }

  return 0;
}

export function hasRefeed(category) {
  if (category === CATEGORY_3) {
    return false;
  }

  return true;
}

export function getRefeedDetails(category) {
  if (category === CATEGORY_1) {
    return  REFEED_1;
  }

  if (category === CATEGORY_2) {
    return REFEED_2;
  }

  return 'N/A';
}


export function getProteinInGrams(leanMass, bodyFatCategory, trainingCategory) {
  if (bodyFatCategory === CATEGORY_1) {
    switch (trainingCategory) {
      case WEIGHT_TRAINING:
        return Math.floor(2 * leanMass);
      case AEROBIC:
        return Math.floor(1.5 * leanMass);
      case INACTIVE:
        return Math.floor(1.25 * leanMass);
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
    }
  }

}


export function getTotalCalories(protein, carbs = 20, fat = 20, preWorkoutCarbs = 5, postWorkoutCarbs = 0) {
  return proteinToKcals(protein) +
  carbsToKcals(carbs + preWorkoutCarbs + postWorkoutCarbs) +
  fatToKcals(fat);
}
