import { AUTH } from './Actions';
import Config from '../config';
export const authenticate = (payLoad) => (dispatch) => {
	fetch(`${Config.apiRoot}/user/login`, {
		method: 'POST',
		body: JSON.stringify(payLoad)
	})
		.then((response) => response.json())
		.then((data) => dispatch({ type: AUTH, payload: data }))
		.catch((data) => console.error(data));
};
