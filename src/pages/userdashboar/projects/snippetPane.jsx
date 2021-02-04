import React from "react";
import { Divider } from "rsuite";

const SnippetPane = () => {
  const snippetContainerSytles = {
    width: "95%",
  };

  const snippetHeaderStyle = {
    margin: ".5rem auto",
  };
  const sectionDescriptionStyles = {

  };

  const snippetStyle ={
    marginLeft: "0.5rem",
    border:" 1px blue solid",
    borderRadius: 4,
    width: "95%",
    padding: "1rem",
  }


  return (
    <div style={snippetContainerSytles}>
      <h1 style={snippetHeaderStyle}>Snippet Pane</h1>
      <div style={sectionDescriptionStyles}>
        <p>
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
      <div style ={snippetStyle}>
        <h3 style={{
            color: "blue",
            marginBottom: "0.3rem"
        }}>Snippet</h3>
        <Divider style={{marginTop: 0}}/>
        <p>
          About the code, and somemore things and suchb On the other hand, we
          denounce with righteous indignation and dislike men who are so
          beguiled and demoralized by the charms of pleasure of the moment, so
          blinded by desire, that they cannot foresee the pain and trouble that
          are bound to ensue; and equal blame belongs to those who fail in their
          duty through weakness of will, which is the same as saying through
          shrinking from toil and pain. These cases are perfectly simple and
          easy to distinguish.
        </p>
      </div>
    </div>
  );
};

export default SnippetPane;
