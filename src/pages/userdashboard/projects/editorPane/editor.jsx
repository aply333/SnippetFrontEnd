import React, { useState, useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-ambiance";
import EditorMenu from "./editorMenu";
import { connect } from "react-redux";

const Editor = ({ sections, markers, cIndex }) => {
  const editorStyle = {
    width: "35rem",
    height: "85vh",
  };

  function onSelection(selection) {
    let start = {
      row: selection.anchor.row,
      column: selection.anchor.column,
    };
    let end = {
      row: selection.lead.row,
      column: selection.lead.column,
    };
    setSelected([start, end]);
  }

  const [displayed, setDisplayed] = useState(" ");

  useEffect(() => {
    if(sections !== [] && cIndex !== ""){
       setDisplayed(sections[cIndex].raw_code); 
    }
  }, [cIndex, sections]);

  const [editorMode, setEditorMode] = useState("javascript");
  const [theme, setTheme] = useState("gitHub");
  const [selected, setSelected] = useState();
  const [snippets, setSnippets] = useState(markers);

  return (
    <div style={{ marginLeft: "0.5rem" }}>
      <EditorMenu
        snippets={snippets}
        setSnippets={setSnippets}
        selected={selected}
        editorMode={`Mode: ${editorMode}`}
        theme={`Theme: ${theme}`}
      />
      <AceEditor
        markers={snippets}
        onSelectionChange={onSelection}
        wrapEnabled={true}
        style={editorStyle}
        mode={editorMode}
        value={displayed}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sections: state.projects_data.sections,
    markers: state.projects_data.markers,
    cIndex: state.application_state.currentCode,
  };
};

export default connect(mapStateToProps, {})(Editor);
