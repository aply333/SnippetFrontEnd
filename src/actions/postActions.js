import { axiosAuth } from "../pages/login/axiosAuth";
import { actionTypes } from "./actionsTypes";

const root_url = "http://localhost:5000/";

export const postNewProject = (username, user_id, project_title) => (
  dispatch
) => {
  dispatch({ type: actionTypes.POST_PROJECT_START });
  axiosAuth()
    .post(`${root_url}postat/${username}/projects/${user_id}`, {
      project_title: project_title,
    })
    .then((res) =>
      dispatch({ type: actionTypes.POST_PROJECT_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: actionTypes.POST_PROJECT_FAIL, payload: err })
    );
};

export const postNewCode = (username, project_id, details) => (dispatch) => {
  dispatch({ type: actionTypes.POST_CODE_START });
  axiosAuth()
    .post(`${root_url}postat/${username}/code/${project_id}`, details)
    .then((res) =>
      dispatch({ type: actionTypes.POST_CODE_SUCCESS, payload: res.data })
    )
    .catch((err) =>
      dispatch({ type: actionTypes.POST_CODE_FAIL, payload: err })
    );
};
