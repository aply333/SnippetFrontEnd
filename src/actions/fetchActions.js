import { axiosAuth } from "../pages/login/axiosAuth";
import { actionTypes } from "./actionsTypes";

const root_url = "http://localhost:5000/";

export const fetchProjects = (user_name, user_id) => (dispatch) => {
  dispatch({ type: actionTypes.FETCH_PROJECTS_START });
  axiosAuth()
    .get(`${root_url}at/${user_name}/projects/${user_id}`)
    .then((res) =>
      dispatch({
        type: actionTypes.FETCH_PROJECTS_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({ type: actionTypes.FETCH_PROJECTS_FAIL, payload: err })
    );
};

export const fetchCodeSection = (user_name, user_id, project_id) => (
  dispatch
) => {
  dispatch({ type: actionTypes.FETCH_SECTIONS_START });
  axiosAuth()
    .get(`${root_url}at/${user_name}/projects/${user_id}/${project_id}`)
    .then((res) => {
      dispatch({
        type: actionTypes.FETCH_SECTIONS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({ type: actionTypes.FETCH_SECTIONS_FAIL, payload: err })
    );
};

export const fetchCodeMarkers = (user_name, user_id, project_id, code_id) => (
  dispatch
) => {
  dispatch({ type: actionTypes.FETCH_MARKERS_START });
  axiosAuth()
    .get(
      `${root_url}at/${user_name}/projects/${user_id}/${project_id}/marker/${code_id}`
    )
    .then((res) => {
      dispatch({
        type: actionTypes.FETCH_MARKERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({ type: actionTypes.FETCH_MARKERS_FAIL, payload: err })
    );
};

export const fetchCodeSnippets = (user_name, user_id, project_id, code_id) => (
  dispatch
) => {
  dispatch({ type: actionTypes.FETCH_SNIPPETS_START });
  axiosAuth()
    .get(
      `${root_url}at/${user_name}/projects/${user_id}/${project_id}/snippet/${code_id}`
    )
    .then((res) => {
      dispatch({ type: actionTypes.FETCH_SNIPPETS_SUCCESS, payload: res.data });
    })
    .catch((err) =>
      dispatch({ type: actionTypes.FETCH_SNIPPETS_FAIL, payload: err })
    );
};
