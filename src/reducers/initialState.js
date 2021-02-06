const initialState = {
    isFetching: false,
    error: "",
    token:[],
    user_data:[],
    application_state:{
        currentPanel: "home",
        currentSection: "",
        currentCode: "",
        currentCodeID:"",
    },
    projects_data:{
        projects:[],
        sections:[],
        markers:[],
        snippets:[]
    }
}

export default initialState