import { axiosAuth } from "../pages/login/axiosAuth";

export const actionTypes = {
  FETCH_LOGIN_START: "FETCH_LOGIN_START",
  FETCH_LOGIN_SUCCESS: "FETCH_LOGIN_SUCCESS",
  FETCH_LOGIN_FAIL: "FETCH_LOGIN_FAIL",
  FETCH_PROJECTS_START: "FETCH_PROJECTS_START",
  FETCH_PROJECTS_SUCCESS: "FETCH_PROJECTS_SUCCESS",
  FETCH_PROJECTS_FAIL: "FETCH_PROJECTS_FAIL",
  SET_CURRENT_PANEL: "SET_CURRENT_PANEL",
  SET_CURRENT_PROJECT_ID: "SET_CURRENT_PROJECT_ID",
  FETCH_SECTIONS_START: "SET_SECTIONS_START",
  FETCH_SECTIONS_SUCCESS: "FETCH_SECTIONS_SUCCESS",
  FETCH_SECTIONS_FAIL: "FETCH_SECTIONS_FAIL"
};

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

export const fetchProjects = (user_name,user_id) => (dispatch) =>{
    dispatch({type: actionTypes.FETCH_PROJECTS_START});
    axiosAuth()
        .get(`${root_url}at/${user_name}/projects/${user_id}`)
        .then((res)=> 
          dispatch({
            type: actionTypes.FETCH_PROJECTS_SUCCESS,
            payload: res.data
          })
        )
        .catch((err) =>
          dispatch({type: actionTypes.FETCH_PROJECTS_FAIL, payload: err })
        );
};

export const setCurrentPanel = (desination_panel) => (dispatch) => {
  dispatch({type: actionTypes.SET_CURRENT_PANEL, payload: desination_panel});
}


export const fetchCodeSection = (user_name, user_id, project_id) => (dispatch) => {
  dispatch({type: actionTypes.FETCH_SECTIONS_START});
  axiosAuth()
    .get(`${root_url}at/${user_name}/projects/${user_id}/${project_id}`)
    .then((res)=>{
      dispatch({
        type: actionTypes.FETCH_SECTIONS_SUCCESS,
        payload: res.data
      })
    })
    .catch((err)=>
      dispatch({type: actionTypes.FETCH_SECTIONS_FAIL, payload: err})
    );
}