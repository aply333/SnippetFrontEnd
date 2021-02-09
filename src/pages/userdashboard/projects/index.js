import React from "react";
import CodeList from "./codeList";
import Editor from "./editorPane/editor";
import { Divider } from "rsuite";
import SnippetPane from "./snippetPane/snippetPane";
import { connect } from "react-redux";
import ProjectLanding from "./projectLanding";

function ProjectView({ currentCodeID}) {
  const codeListStyles = {
    width: "10rem",
    height: "95vh",
  };

  const EditView = () => {
    return(
      <>
      <Editor />
      <Divider style={{ height: "95vh" }} vertical />
      <SnippetPane />
      </>
    )
  }
  
  return (
    <div style={{ display: "flex",}}>
      <CodeList style={codeListStyles} />
      {currentCodeID ==="overview"? <ProjectLanding/> : <EditView/>}
    </div>
  );
}

const mapStateToProps = (state) =>{
  return{
    currentCodeID: state.application_state.currentCodeID
  }
}

export default connect(mapStateToProps, {})(ProjectView)
