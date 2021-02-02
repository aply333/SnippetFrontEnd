import React from "react";
import CodeList from "./codeList";

function ProjectView(){
    const codeListStyles = {
        width: "10%",
        height: "95vh",
    }

    return(
        <div>
            <CodeList style={codeListStyles}/>
        </div>
    )
}

export default ProjectView;