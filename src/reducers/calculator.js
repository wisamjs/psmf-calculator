import { UPDATE_WEIGHT } from '../actions/actions';

const INITIAL_STATE = {
  weightLbs: 150,
  weightKgs: 68
};

export default function calculator(state = INITIAL_STATE, action= {}) {
	switch(action.type) {
		case UPDATE_WEIGHT:
			return { ...state, weightLbs: action.payload };
		default:
			return state;
	}
}
