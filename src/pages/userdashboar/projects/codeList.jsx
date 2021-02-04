import React, { useState, useEffect } from "react";
import { Nav } from "rsuite";
import { connect } from "react-redux";
import { fetchCodeSection } from "../../../actions/index";

const CodeList = ({ sections, user_data, ...props }) => {
  const [active, setActive] = useState();

  const handleSelect = (active) => {
    setActive(active);
  };
  return (
    <div>
      
      <Nav
        {...props}
        vertical
        activeKey={active}
        onSelect={handleSelect}
        appearance="subtle"
      >
        <Nav.Item> </Nav.Item>
        {sections.map((section) => (
          <Nav.Item eventKey={section.code_id}>{section.code_title}</Nav.Item>
        ))}
      </Nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sections: state.projects_data.sections,
    user_data: state.user_data,
  };
};

export default connect(mapStateToProps, { fetchCodeSection })(CodeList);
