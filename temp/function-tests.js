import { expect } from 'chai';
import {

  isCategory1,
  isCategory2,
  isCategory3,

  getLeanMass,
  getNumOfFreeMeals,
  getCategory,

  hasRefeed,
  getRefeedDetails,
  REFEED_1,
  REFEED_2,

  getFullDietBreak,
  getProteinInGrams,

  proteinToKcals,
  carbsToKcals,
  fatToKcals,
  getTotalCalories

  } from './functions';

  const personA = {
    bf: 15,
    weight: 100,
    gender: 'male'
  };

  const personB = {
    bf: 24,
    gender: 'female'
  };

  const personC = {
    bf: 16,
    gender: 'male'
  };

  const personD = {
    bf: 25,
    gender: 'female'
  };

  const personE = {
    bf: 26,
    gender: 'male'
  };

  const personF = {
    bf: 40,
    gender: 'female'
  };

xdescribe('Bodyfat Categories', () => {
  it('should correctly identify Category 1', () => {
    [personA, personB].forEach((person) => {
      expect(isCategory1(person.bf, person.gender)).eql(true);
      expect(isCategory2(person.bf, person.gender)).eql(false);
      expect(isCategory3(person.bf, person.gender)).eql(false);
    });

    [personC, personD].forEach((person) => {
      expect(isCategory1(person.bf, person.gender)).eql(false);
    });
  });

  it('should correctly identify Category 2', () => {
    [personC, personD].forEach((person) => {
      expect(isCategory2(person.bf, person.gender)).eql(true);
      expect(isCategory3(person.bf, person.gender)).eql(false);
    });
  });

  it('should correctly identify Category 3', () => {
    [personE, personF].forEach((person) => {
      expect(isCategory3(person.bf, person.gender)).eql(true);
      expect(isCategory2(person.bf, person.gender)).eql(false);
    });
  });
});

xdescribe('Training Categories', () => {
  it('should ')

});

xdescribe('Lean Mass', () => {
  it('should calculate lean mass', () => {
    expect(getLeanMass(personA.bf, personA.weight)).to.eql(85);
  });
});


xdescribe('Protein intake', () => {
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

xdescribe('Gram to Calories conversion', () => {
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
