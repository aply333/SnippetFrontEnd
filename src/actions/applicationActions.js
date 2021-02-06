import { actionTypes } from "./actionsTypes";

export const setCurrentPanel = (desination_panel) => (dispatch) => {
  dispatch({ type: actionTypes.SET_CURRENT_PANEL, payload: desination_panel });
};

export const setCurrentCode = (code_index) => (dispatch) =>{
  dispatch({ type: actionTypes.SET_CURRENT_CODE, payload: code_index})
} 

export const setCurrentCodeId = (code_id) => (dispatch) => {
  dispatch({ type: actionTypes.SET_CURRENT_CODE_ID, payload: code_id })
}