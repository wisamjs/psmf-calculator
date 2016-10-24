// import { toKg } from './conversions';

// function actionify(type, action) {
// 	return () => {
// 		return {
// 			type: type,
// 			payload: action()
// 		}
// 	}
// }

export function updateWeight(val) {
	return {
		type: 'UPDATE_WEIGHT',
		payload: val
	}
};


