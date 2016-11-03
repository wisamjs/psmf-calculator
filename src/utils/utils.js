import {
	UPDATE_WEIGHT,
	UPDATE_BODYFAT,
	UPDATE_TRAINING,
	UPDATE_ACTIVITY,
	UPDATE_GENDER
} from '../actions/actions';

export function updateWeight(val) {
	return updateInputNumber(UPDATE_WEIGHT)(val);
}

export function updateBodyFat(val) {
	return updateInputNumber(UPDATE_BODYFAT)(val);
}

export function updateTraining(val) {
	return updateInputNumber(UPDATE_TRAINING)(val);
}

export function updateActivity(val) {
	return updateInput(UPDATE_ACTIVITY)(val);
}

export function updateGender(val) {
	return updateInput(UPDATE_GENDER)(val);
}

export function updateInputNumber(type) {
	return (val) => {
		return {
			type: type,
			payload: parseInt(val, 10)
		}
	}
}

export function updateInput(type) {
	return (val) => {
		return {
			type: type,
			payload: val
		}
	}
}
