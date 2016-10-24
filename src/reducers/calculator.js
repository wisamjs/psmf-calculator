import { fromJS } from 'immutable';

const INITIAL_STATE = fromJS({
  weightLbs: 150,
  weightKgs: 68
});

export default function calculator(state = INITIAL_STATE, action= {}) {
  return state;
}
