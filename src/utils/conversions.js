const LBS = 'lbs';
const LBS_TO_KG = 0.45359237;

export function toKg(num, type) {
  switch(type) {
    case LBS:
      return convert(LBS_TO_KG, 3)(num);
    default:
      return num;
  }
}

export function toKcals(multiplier) {
  return function(amount) {
    return multiplier * amount;
  }
}

export function proteinToKcals(amount) {
  return toKcals(4)(amount);
}

export function carbsToKcals(amount) {
  return proteinToKcals(amount);
}

export function fatToKcals(amount) {
  return toKcals(9)(amount);
}

export function convert(rate, precision) {
  return (num) =>
    parseFloat(
      (num * rate)
      .toPrecision(precision)
    );
}
