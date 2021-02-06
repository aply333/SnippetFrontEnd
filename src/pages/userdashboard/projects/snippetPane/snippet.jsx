import { Panel, Divider } from "rsuite";

const Snippet = ({ snips }) => {
  const snippetPanelStyle = {
    border: "blue solid 1px",
    width: "95%",
    margin: "0 auto",
    marginBottom: "0.5rem",
    boxShadow: `2px 2px 5px lightblue`,
  };
  return (
    <div>
      {snips.map((snip) => (
        <Panel header={snip.snippet_title} style={snippetPanelStyle} collapsible>
          <Divider style={{ marginTop: 0 }} />
          <p>{snip.snippet_data}</p>
        </Panel>
      ))}
    </div>
  );
};

export default Snippet;
