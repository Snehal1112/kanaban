import { AUTH, LOADING, LOGOUT } from './Actions';
import Config from '../config';
export const authenticate = (payLoad) => (dispatch) => {
	dispatch({ type: LOADING, payload: { loading: true } });
	fetch(`${Config.apiRoot}/user/login`, {
		method: 'POST',
		body: JSON.stringify(payLoad)
	})
		.then((response) => response.json())
		.then((data) => {
			const { token } = data;
			if (token) {
				localStorage.setItem('token', token);
			}
			dispatch({ type: AUTH, payload: { ...data, loading: false } });
		})
		.catch((data) => console.error(data));
};

export const logout = (payLoad) => (dispatch) => {
	localStorage.removeItem('token');
	dispatch({ type: LOGOUT, payload: {} });
};
