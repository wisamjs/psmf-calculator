import {expect} from 'chai';

import {
  CARB_LIMIT,
  FAT_LIMIT,
  PREWORKOUT_CARB_LIMIT
} from './constants';

import {
  getProteinInGrams,
  getCarbsInGrams,
  getFatInGrams,
  getPreworkoutCarbsInGrams,
  getTotalCalories

} from './calories';

describe('Protein intake', () => {
  it('should return the right numbers for Category 1', () => {
    expect(getProteinInGrams(141, 1, 1)).to.eql(176);
    expect(getProteinInGrams(141, 1, 2)).to.eql(211);
    expect(getProteinInGrams(141, 1, 3)).to.eql(282);
  });

  it('should return the right numbers for Category 2', () => {
    expect(getProteinInGrams(120, 2, 1)).to.eql(108);
    expect(getProteinInGrams(120, 2, 2)).to.eql(132);
    expect(getProteinInGrams(120, 2, 3)).to.eql(150);
  });

  it('should return the right numbers for Category 3', () => {
    expect(getProteinInGrams(140, 3, 1)).to.eql(112);
    expect(getProteinInGrams(140, 3, 2)).to.eql(126);
    expect(getProteinInGrams(140, 3, 3)).to.eql(140);
  });
});

describe('Carb & Fat intake', () => {
  it('should return the correct limits', () => {
    expect(getCarbsInGrams()).to.eql(CARB_LIMIT);
    expect(getCarbsInGrams()).to.eql(FAT_LIMIT);
    expect(getPreworkoutCarbsInGrams()).to.eql(PREWORKOUT_CARB_LIMIT);
  });

});

describe('Total Calorie Intake', () => {
  it('should get correct calorie intake', () => {
    expect(getTotalCalories(264, 20, 20)).to.eql(1316);

  });
});
