import React, { useEffect, useState } from "react";
import { Divider } from "rsuite";
import { connect } from "react-redux";
import {
  fetchCodeMarkers,
  fetchCodeSnippets,
} from "../../../../actions/fetchActions";
import Snippet from "./snippet";

const SnippetPane = ({
  snippets,
  fetchCodeSnippets,
  fetchCodeMarkers,
  user_data,
  currentPanel,
  cIndex,
  codeId,
  section,
}) => {
  const snippetContainerSytles = {
    width: "35%",
  };

  const snippetHeaderStyle = {
    margin: ".5rem auto",
  };

  const paneDescriptionStyle = {
    width: "90%",
    margin: "0 auto",
  };

  const [titleText, setTitleText] = useState("");

  useEffect(() => {
    if(cIndex !== ""){
      fetchCodeSnippets(
        user_data.username,
        user_data.user_id,
        currentPanel,
        codeId
      );
      fetchCodeMarkers(
        user_data.username,
        user_data.user_id,
        currentPanel,
        codeId
      );
      if (section !== [] && cIndex !== "") {
        setTitleText({
          title: section[cIndex].code_title,
          description: section[cIndex].description,
        });
    }}
  }, [cIndex]);

  return (
    <div style={snippetContainerSytles}>
      <h1 style={snippetHeaderStyle}>{titleText.title}</h1>
      <div>
        <p style={paneDescriptionStyle}>{titleText.description}</p>
        <Divider />
      </div>
      <Snippet snips={snippets} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    snippets: state.projects_data.snippets,
    user_data: state.user_data,
    currentPanel: state.application_state.currentPanel,
    cIndex: state.application_state.currentCode,
    codeId: state.application_state.currentCodeID,
    section: state.projects_data.sections,
  };
};

export default connect(mapStateToProps, {
  fetchCodeSnippets,
  fetchCodeMarkers,
})(SnippetPane);
