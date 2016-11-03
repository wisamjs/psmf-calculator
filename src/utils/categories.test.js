import {expect} from 'Chai';

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

import {
  getCategory,
  isCategory1,
  isCategory2,
  isCategory3,
  getNumOfFreeMeals,
  hasRefeed,
  getRefeedDetails,
  getFullDietBreak
} from './categories';

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

describe('Bodyfat Categories', () => {
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

describe('Free meals', () => {
  it('should calculate free meals for Category 1', () => {
    [personA, personB].forEach((person) => {
      expect(getNumOfFreeMeals
        (getCategory(person.bf, person.gender))
      ).to.eql(0);
    });
  });

  it('should calculate free meals for Category 2', () => {

    [personC, personD].forEach((person) => {
      expect(getNumOfFreeMeals
        (getCategory(person.bf, person.gender))
      ).to.eql(1);
    });

  });

  it('should calculate free meals for Category 3', () => {

    [personE, personF].forEach((person) => {
      expect(getNumOfFreeMeals
        (getCategory(person.bf, person.gender))
      ).to.eql(2);
    });
  });
});

describe('Refeeds', () => {
  it('should specify refeed details', () => {
    expect(getRefeedDetails(1)).eql(REFEED_1);
    expect(getRefeedDetails(2)).eql(REFEED_2);
    expect(getRefeedDetails(3)).eql('N/A');
  });
});

describe('Full Diet Break', () => {
  it('should get details for category 1', () => {
    expect(getFullDietBreak(1)).to.eql('11 - 12 days');
  });

  it('should get details for category 2', () => {
    expect(getFullDietBreak(2)).to.eql('2 - 6 weeks');
  });

  it('should get details for category 3', () => {
    expect(getFullDietBreak(3)).to.eql('6 - 12 weeks');
  });

});
