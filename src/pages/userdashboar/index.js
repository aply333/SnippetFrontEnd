import React, { useState } from "react";
import BottomNav from "../../sharedComponents/bottomNav";
import LeftNav from "../../sharedComponents/leftNav";
import {connect} from "react-redux";
import Home from "./home";

function UserDashboard({currentPanel}){
    
    return(
        <div style={{display: "flex"}}>
            <LeftNav/>
            <div style={{width: "100%"}}>
               {currentPanel==="home" ? null : <Home/>}
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