import React, { useState } from "react";
import { Nav, Dropdown, Modal, Divider, Tag, TagGroup } from "rsuite";
import { useForm } from "react-hook-form";
import InputColor from "react-input-color";

const EditorMenu = ({ snippets, setSnippets, selected, editorMode, theme }) => {
  const themes = [
    "monokai",
    "github",
    "tomorrow",
    "kuroir",
    "twilight",
    "xcode",
    "textmate",
    "solarized dark",
    "solarized light",
    "terminal",
  ];

  const modes = [
    "javascript",
    "java",
    "python",
    "xml",
    "ruby",
    "sass",
    "markdown",
    "mysql",
    "json",
    "html",
    "handlebars",
    "golang",
    "csharp",
    "coffee",
    "css",
  ];

  const [newSnippetMenu, setNewSnippetMenu] = useState({
    backdrop: false,
    show: false,
  });

  const open = () => {
    setNewSnippetMenu({
      backdrop: true,
      show: true,
    });
  };

  const close = () => {
    setNewSnippetMenu({
      backdrop: false,
      show: false,
    });
  };

  const NewSnippetForm = () => {
    return (
      <div>
        <Divider />
        <p>Sample Snippet text.</p>
        <Divider />
        <div style={{ display: "flex", flexFlow: "row" }}>
          <div style={{ width: "48%" }}>
            <form style={{ display: "flex", flexFlow: "column" }}>
              <label>Title: </label>
              <input type="text" placeholder="name for snippet" />
              <label>Description:</label>
              <textarea style={{ height: "8rem" }} />
            </form>
          </div>
          <Divider style={{ height: "12rem" }} vertical />
          <div style={{ width: "48%" }}>
            <TagGroup style={{ margin: "0.5 auto" }}>
              <Tag color="red">Tag One</Tag>
              <Tag color="blue">Tag One</Tag>
              <Tag color="orange">Tag One</Tag>
              <Tag color="green">Tag One</Tag>
              <Tag color="cyan">Tag One</Tag>
              <Tag color="violet">Tag One</Tag>
            </TagGroup>
            <Divider style={{ width: "100%" }}><h2>or</h2></Divider>
            <div>
            <p>Pick a Color:</p>
            <InputColor initialValue="#ffffff" placement="right" />
            </div>
          </div>
        </div>
        <Divider />
        <button
          className="primaryButton"
          style={{ width: "6rem", marginRight: "0.5rem" }}
        >
          Set Snippet
        </button>
        <button
          className="secondaryButton"
          onClick={(e) => {
            e.preventDefault();
            close();
          }}
        >
          Cancel
        </button>
      </div>
    );
  };

  function snippetHandler(location) {
    open();
    setSnippets([
      ...snippets,
      {
        startRow: location[0].row,
        startCol: location[0].column,
        endRow: location[1].row,
        endCol: location[1].column,
        className: "markerTest2",
        snippet_id: 1,
      },
    ]);
  }

  return (
    <>
      <Modal backdrop={newSnippetMenu.backdrop} show={newSnippetMenu.show}>
        <Modal.Title>Create New Snippet</Modal.Title>
        <NewSnippetForm />
      </Modal>
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          justifyContent: "space-between",
          marginTop: "0.5rem",
          marginBottom: "0.5rem",
        }}
      >
        <Nav>
          <Nav.Item
            onClick={() => {
              snippetHandler(selected);
            }}
          >
            + Set Snippet
          </Nav.Item>
        </Nav>
        <Nav>
          <Dropdown title={theme}>
            {themes.map((theme) => (
              <Dropdown.Item>{theme}</Dropdown.Item>
            ))}
          </Dropdown>
          <Dropdown title={editorMode}>
            {modes.map((mode) => (
              <Dropdown.Item>{mode}</Dropdown.Item>
            ))}
          </Dropdown>
        </Nav>
      </div>
    </>
  );
};

export default EditorMenu;
