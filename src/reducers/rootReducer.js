import { actionTypes } from "../actions/actionsTypes";
import initialState from "./initialState";

const rootReducer = (state = initialState, action) =>{
    switch (action.type) {
        case actionTypes.FETCH_LOGIN_START:
            return{
                ...state,
                isFetching: true,
                error: ""
            }
        case actionTypes.FETCH_LOGIN_SUCCESS:
            return{
                ...state,
                isFetching: false,
                token: action.payload.token,
                user_data: action.payload.data,
                error: ""
            }
        case actionTypes.FETCH_LOGIN_FAIL:
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
        case actionTypes.POST_PROJECT_START:
        case actionTypes.FETCH_PROJECTS_START :
            return{
                ...state,
                isFetching: true,
                error: ""
            }
        case actionTypes.POST_PROJECT_SUCCESS:
        case actionTypes.FETCH_PROJECTS_SUCCESS:
            return{
                ...state,
                isFetching: false,
                error: "",
                projects_data:{
                    ...state.projects_data,
                    projects: action.payload
                }
            }
        case actionTypes.POST_PROJECT_FAIL:
        case actionTypes.FETCH_PROJECTS_FAIL:
            return{
                ...state,
                isFetching: false,
                error: action.payload,
            }
        case actionTypes.SET_CURRENT_PANEL:
            return{
                ...state,
                application_state:{
                    ...state.application_state,
                    currentPanel: action.payload
                }
            }
        case actionTypes.POST_CODE_START:
        case actionTypes.FETCH_SECTIONS_START:
            return{
                ...state,
                isFetching: true,
                error: ""
            }
        case actionTypes.POST_CODE_SUCCESS:
        case actionTypes.FETCH_SECTIONS_SUCCESS:
            return{
                ...state,
                error: "",
                isFetching: false,
                projects_data:{
                    ...state.projects_data,
                    sections: action.payload
                }
            }
        case actionTypes.POST_CODE_FAIL:
        case actionTypes.FETCH_SECTIONS_FAIL:
            return{
                ...state,
                isFetching: false,
                error: action.payload,
            }
        case actionTypes.FETCH_MARKERS_START:
            return{
                ...state,
                isFetching: true,
                error: ""
            }
        case actionTypes.FETCH_MARKERS_SUCCESS:
            return{
                ...state,
                isFetching: false,
                error: "",
                projects_data: {
                    ...state.projects_data,
                    markers: action.payload
                }
            }
        case actionTypes.FETCH_MARKERS_FAIL:
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
        case actionTypes.FETCH_SNIPPETS_START:
            return{
                ...state,
                isFetching: true,
                error: ""
            }
        case actionTypes.FETCH_SNIPPETS_SUCCESS:
            return{
                ...state,
                isFetching: false,
                error:"",
                projects_data:{
                    ...state.projects_data,
                    snippets: action.payload
                }
            }
        case actionTypes.FETCH_SNIPPETS_FAIL:
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
        case actionTypes.SET_CURRENT_CODE:
            return{
                ...state,
                application_state:{
                    ...state.application_state,
                    currentCode: action.payload
                }
            }
        case actionTypes.SET_CURRENT_CODE_ID:
            return{
                ...state,
                application_state:{
                    ...state.application_state,
                    currentCodeID: action.payload
                }
            }
        case actionTypes.FETCH_TAGS_START:
            return{
                ...state,
                isFetching: true,
                error: ""
            }
        case actionTypes.FETCH_TAGS_SUCCESS:
            return{
                ...state,
                isFetching: false,
                error: "",
                projects_data:{
                    ...state.projects_data,
                    tags: action.payload
                }
            }
        case actionTypes.FETCH_TAGS_FAIL:
            return{
                ...state,
                isFetching: false,
                error: action.payload
            }
        default:
          return state
    }    
}

export default rootReducer