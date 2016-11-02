const CATEGORY_1 = 1;
const CATEGORY_2 = 2;
const CATEGORY_3 = 3;

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
    gender === 'female'
    && bf <= 34
    && !isCategory1(bf, gender)
    && !isCategory3(bf, gender);
}

export function isCategory3(bf, gender ) {
  return gender === 'male' && bf >= 26
  ||
    gender === 'female' && bf >= 35;
}
