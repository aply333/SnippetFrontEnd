import React, { useState, useEffect } from "react";
import { Divider } from "rsuite";
import { connect } from "react-redux";
import {
  fetchCodeSnippets,
} from "../../../../actions/fetchActions";
import Snippet from "./snippet";

const SnippetPane = ({
  snippets,
  fetchCodeSnippets,
  user_data,
  currentPanel,
  cIndex,
}) => {
  const snippetContainerSytles = {
    width: "95%",
  };

  const snippetHeaderStyle = {
    margin: ".5rem auto",
  };

  const paneDescriptionStyle = {
    width: "90%",
    margin: "0 auto",
  };

  useEffect(() => {
    fetchCodeSnippets(user_data.username, user_data.user_id, currentPanel , 1);
  }, [cIndex]);

  return (
    <div style={snippetContainerSytles}>
      <h1 style={snippetHeaderStyle}>Snippet Pane</h1>
      <div>
        <p style={paneDescriptionStyle}>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
        <Divider />
      </div>
      <Snippet snips={snippets}/>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    snippets: state.projects_data.snippets,
    user_data: state.user_data,
    currentPanel: state.application_state.currentPanel,
    cIndex: state.application_state.currentCode,
  };
};

export default connect(mapStateToProps, {
  fetchCodeSnippets,
})(SnippetPane);
