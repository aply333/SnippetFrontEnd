import { Panel, Divider } from "rsuite";

const Snippet = ({ snips }) => {

  return (
    <div>
      {snips.map((snip) => (
        <Panel
          style={{
            border: `${snip.hex} solid 1px`,
            boxShadow: `2px 2px 5px ${snip.hex}`,
            width: "95%",
            margin: "0 auto",
            marginBottom: "0.5rem",
          }}
          header={snip.snippet_title}
          key={snip.snippet_id}
          collapsible
        >
          <Divider style={{ marginTop: "0px" }} />
          <p>{snip.snippet_data}</p>
        </Panel>
      ))}
    </div>
  );
};

export default Snippet;
