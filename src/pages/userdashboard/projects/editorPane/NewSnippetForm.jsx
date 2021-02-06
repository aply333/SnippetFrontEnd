import { Divider, TagGroup, Tag } from "rsuite";
import InputColor from "react-input-color";

const NewSnippetForm = ({ close }) => {
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
              {/* Need to Refactor from database. */}
            <Tag color="red">Tag One</Tag>
            <Tag color="blue">Tag One</Tag>
            <Tag color="orange">Tag One</Tag>
            <Tag color="green">Tag One</Tag>
            <Tag color="cyan">Tag One</Tag>
            <Tag color="violet">Tag One</Tag>
          </TagGroup>
          <Divider style={{ width: "100%" }}>
            <h2>or</h2>
          </Divider>
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

export default NewSnippetForm;
