import { AUTH } from "./Actions";

export const authenticate = payLoad => dispatch => {
  fetch("https://mysterious-depths-61756.herokuapp.com/api/v1/user/login", {
    method: "POST",
    body: JSON.stringify(payLoad)
  })
    .then(response => response.json())
    .then(data => dispatch({ type: AUTH, payload: data }));
};
