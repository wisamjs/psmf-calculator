export function getLeanMass(weight, bf) {
  return weight * (1 - percentToDecimal(bf));
}

export function percentToDecimal(percent) {
  return percent/100;
}
