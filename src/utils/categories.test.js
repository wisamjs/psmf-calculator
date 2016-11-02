import {expect} from 'Chai';
import {
  isCategory1,
  isCategory2,
  isCategory3
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
