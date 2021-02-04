import React, {useState} from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-ambiance";
import EditorMenu from "./editorMenu";

import {testData} from "./testCode"

const Editor = () => {
    const editorStyle = {
        width: "35rem",
        height: "85vh"
    }

    function onChange(newValues) {
        // console.log("Editor Change: ",newValues)
    }

    function onSelection(selection) {
        let start = {
            row: selection.anchor.row,
            column: selection.anchor.column
        }
        let end = {
            row: selection.lead.row,
            column: selection.lead.column
        }
        setSelected([start, end])
    }

    const [editorMode, setEditorMode] = useState("javascript")
    const [theme, setTheme] = useState("gitHub")

    const [selected, setSelected] = useState()

    const [snippets, setSnippets] = useState([])

    return(
        <div style={{marginLeft:"0.5rem"}}>
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
                onChange={onChange} 
                style={editorStyle}
                mode={editorMode}
                value={testData}
            />
        </div>
    )
}

export default Editor