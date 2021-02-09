import React, { useState } from "react";
import { Nav, Dropdown, Modal } from "rsuite";
import NewSnippetForm from "./NewSnippetForm";
import { themes, modes } from "../projectsConsts";

const EditorMenu = ({ snippets, setSnippets, selected, editorMode, theme }) => {
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

  function snippetHandler(location, colorClass) {
    setSnippets([
      ...snippets,
      {
        startRow: location[0].row,
        startCol: location[0].column,
        endRow: location[1].row,
        endCol: location[1].column,
        className: colorClass,
        snippet_id: 1,
      },
    ]);
  }

  return (
    <>
      <Modal backdrop={newSnippetMenu.backdrop} show={newSnippetMenu.show}>
        <Modal.Title>Create New Snippet</Modal.Title>
        <NewSnippetForm
          snippetHandler={snippetHandler}
          location={selected}
          close={close}
        />
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
          <Nav.Item onClick={open}> + Set Snippet</Nav.Item>
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
