import { AUTH } from "../../actions/Actions";
const initialState = {
  result: {}
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH:
      return { ...state, result: payload };

    default:
      return state;
  }
};
