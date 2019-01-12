import { AUTH, LOADING, LOGOUT } from '../../actions/Actions';
const initialState = {
	result: {}
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
		case AUTH:
			return { ...state, data: payload };
		case LOADING:
			return { ...state, data: payload };
		case LOGOUT:
			return { ...state, data: payload };
		default:
			return state;
	}
};
