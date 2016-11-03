import {

  CATEGORY_1,
  CATEGORY_2,
  CATEGORY_3,

  REFEED_1,
  REFEED_2,

  FULL_BREAK_1,
  FULL_BREAK_2,
  FULL_BREAK_3

} from './constants';


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

export function isCategory1( bf, gender ) {
  return (gender === 'male' && bf <= 15)
  ||
    (gender === 'female' && bf <= 24);
}

export function isCategory2( bf, gender ) {
  return (gender === 'male'
    && bf <= 25
    && !isCategory1(bf, gender)
    && !isCategory3(bf, gender))
  ||
    (gender === 'female'
    && bf <= 34
    && !isCategory1(bf, gender)
    && !isCategory3(bf, gender));
}

export function isCategory3(bf, gender ) {
  return (gender === 'male' && bf >= 26)
  ||
    (gender === 'female' && bf >= 35);
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

export function getRefeedDetails(category) {
  if (category === CATEGORY_1) {
    return  REFEED_1;
  }

  if (category === CATEGORY_2) {
    return REFEED_2;
  }

  return 'N/A';
}

export function getFullDietBreak(category) {

  if (category === CATEGORY_1) {
    return FULL_BREAK_1;
  }

  if (category === CATEGORY_2) {
    return FULL_BREAK_2;
  }

  if (category === CATEGORY_3) {
    return FULL_BREAK_3;
  }
}

