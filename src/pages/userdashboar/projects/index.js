import React from "react";
import CodeList from "./codeList";
import Editor from "./editor";
import { Divider } from "rsuite";
import SnippetPane from "./snippetPane";

function ProjectView(){
    const codeListStyles = {
        width: "10rem",
        height: "95vh",
    }



    return(
        <div style={{
            display: "flex"
        }}>
            <CodeList style={codeListStyles}/>
            <Editor />
            <Divider style={{height: "95vh"}} vertical/>
            <SnippetPane/>
        </div>
    )
}

export default ProjectView;