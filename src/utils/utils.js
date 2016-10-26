import { UPDATE_WEIGHT } from '../actions/actions';

export function updateWeight(val) {
	return {
		type: UPDATE_WEIGHT,
		payload: parseInt(val, 10)
	}
};


