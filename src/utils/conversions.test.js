import {expect} from 'Chai';
import {
	toKg
} from './Conversions';

describe('Conversions', () => {
	it('should convert lbs to kgs to 1 decimal place', () => {
		expect(toKg(150, 'lbs')).to.eql(68.0);
		expect(toKg(179, 'lbs')).to.eql(81.2);
		expect(toKg(113.4, 'lbs')).to.eql(51.4);
	});

});