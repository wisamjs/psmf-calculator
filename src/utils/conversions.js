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

export function convert(rate, precision) {
  return (num) =>
    parseFloat(
      (num * rate)
      .toPrecision(precision)
    );
}
