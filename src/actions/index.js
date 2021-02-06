import { axiosAuth } from "../pages/login/axiosAuth";
import { actionTypes } from "./actionsTypes";


const root_url = "http://localhost:5000/";

export const postLogin = (url, credentials) => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_LOGIN_START });
  axiosAuth()
    .post(`${root_url}${url}`, credentials)
    .then((res) =>
      dispatch({
        type: actionTypes.FETCH_LOGIN_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({ type: actionTypes.FETCH_LOGIN_FAIL, payload: err })
    );
};

export * from "./fetchActions";
export * from "./applicationActions";