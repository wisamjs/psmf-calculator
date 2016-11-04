import {expect} from 'chai';
import { getLeanMass } from './bodystats';

const personA = {
  bf: 15,
  weight: 100,
  gender: 'male'
};

const personB = {
  bf: 24,
  gender: 'female'
};

describe('Lean Mass', () => {
  it('should calculate lean mass', () => {
    expect(getLeanMass(personA.weight, personA.bf)).to.eql(85);
  });
});
