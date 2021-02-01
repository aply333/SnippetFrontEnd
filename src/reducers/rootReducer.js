import {actionTypes} from "../actions/index"

const initialState = {
    isFetching: false,
    error: "",
    token:[],
    user_data:[],
    application_state:{
        currentPanel: "home",
    },
    projects_data:{
        projects:[],
    }
}

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
        case actionTypes.FETCH_PROJECTS_START:
            return{
                ...state,
                isFetching: true,
                error: ""
            }
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
        default:
          return state
    }    
}

export default rootReducer