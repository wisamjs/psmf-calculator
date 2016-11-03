import {expect} from 'Chai';
import { toKg, proteinToKcals, carbsToKcals, fatToKcals  } from './conversions';

describe('Conversions', () => {
  it('should convert lbs to kgs to 1 decimal place', () => {
    expect(toKg(150, 'lbs')).to.eql(68.0);
    expect(toKg(179, 'lbs')).to.eql(81.2);
    expect(toKg(113.4, 'lbs')).to.eql(51.4);
  });
});

describe('Gram to Calories conversion', () => {
  it('should convert protein correctly', () => {
    expect(proteinToKcals(264)).to.eql(1056);
  });

  it('should convert carbs correctly', () => {
    expect(carbsToKcals(20)).to.eql(80);
  });

  it('should convert fat correctly', () => {
    expect(fatToKcals(20)).to.eql(180);
  });

})
