import React, { useState } from "react";
import BottomNav from "../../sharedComponents/bottomNav";
import LeftNav from "../../sharedComponents/leftNav";
import {connect} from "react-redux";
import Home from "./home";
import ProjectView from "./projects";

function UserDashboard({currentPanel}){
    const [view, setView] = useState(currentPanel)

    return(
        <div style={{display: "flex"}}>
            <LeftNav setView={setView}/>
            <div style={{width: "100%"}}>
               {view==="home" ? <Home/> : <ProjectView/>}
            </div>
            <BottomNav/>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        currentPanel: state.currentPanel
    }
}

export default connect(mapStateToProps,{})(UserDashboard);