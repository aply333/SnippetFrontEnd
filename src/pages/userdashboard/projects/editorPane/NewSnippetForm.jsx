import React, { useState } from "react";
import { Divider, TagGroup, Tag } from "rsuite";
import { colorChoices, snippetFormStyle, formContainer } from "./editorConst";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";

const NewSnippetForm = ({ snippetHandler, location, close, tags }) => {
  const { register, handleSubmit } = useForm();
  const [snipColor, setSnipColor] = useState("yellow");
  const submitNewSnippet = (data) => {
    console.log(data);
    snippetHandler(location, snipColor);
    close();
  };

  return (
    <div>
      <Divider />
      <p style={{ backgroundColor: snipColor }}>Sample Snippet text.</p>
      <Divider />
      <div style={formContainer}>
        <div style={{ width: "48%" }}>
          <form
            onSubmit={handleSubmit(submitNewSnippet)}
            style={snippetFormStyle}
          >
            <label>Title: </label>
            <input
              name="title"
              type="text"
              placeholder="name for snippet"
              ref={register}
            />
            <label>Description:</label>
            <textarea
              name="description"
              style={{ height: "8rem" }}
              ref={register}
            />
            <button
              className="primaryButton"
              style={{
                width: "6rem",
                marginRight: "0.5rem",
                marginTop: "1rem",
              }}
            >
              Set Snippet
            </button>
          </form>
        </div>
        <Divider style={{ height: "15rem" }} vertical />
        <div style={{ width: "48%" }}>
          <TagGroup style={{ margin: "0.5 auto" }}>
            {tags.map((tag) => {
              if (tag.tag_text != null) {
                return (
                  <Tag
                    key={tag.tag_id}
                    style={{ position: "relative", cursor: "pointer" }}
                    className={tag.color}
                    onClick={()=>{setSnipColor(tag.color)}}
                  >
                    {tag.tag_text}
                  </Tag>
                );
              }
            })}
          </TagGroup>
          <Divider style={{ marginBottom: " 0.3rem", width: "100%" }}>
            <h2>or</h2>
          </Divider>
          <div>
            <p style={{ marginBottom: "0.3rem" }}>Pick a Color:</p>
            <TagGroup>
              {colorChoices.map((color) => (
                <Tag
                  key={Math.random() * 20}
                  style={{
                    backgroundColor: color.hex,
                    color: "black",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setSnipColor(color.colorClass);
                  }}
                >
                  {color.name}
                </Tag>
              ))}
            </TagGroup>
          </div>
        </div>
      </div>
      <Divider />

      <button
        className="secondaryButton"
        style={{ marginLeft: "85%" }}
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

const mapStateToProps = (state) => {
  return {
    tags: state.projects_data.tags,
  };
};

export default connect(mapStateToProps, {})(NewSnippetForm);
