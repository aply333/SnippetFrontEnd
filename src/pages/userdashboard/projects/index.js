import React from "react";
import CodeList from "./codeList";
import Editor from "./editorPane/editor";
import { Divider } from "rsuite";
import SnippetPane from "./snippetPane/snippetPane";
import { connect } from "react-redux";

function ProjectView({sections}) {
  const codeListStyles = {
    width: "10rem",
    height: "95vh",
  };

  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <CodeList 
        style={codeListStyles} 
        />
      <Editor />
      <Divider style={{ height: "95vh" }} vertical />
      <SnippetPane />
    </div>
  );
}

const mapStateToProps = (state) =>{
    return{
        sections: state.projects_data.sections,
    }
}

export default connect(mapStateToProps,{}) (ProjectView);
