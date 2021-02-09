import React, { useState } from "react";
import { Nav } from "rsuite";
import { connect } from "react-redux";
import {
  fetchCodeSection,
  setCurrentCode,
  setCurrentCodeId
} from "../../../actions/index";

const CodeList = ({
  sections,
  user_data,
  setCurrentCode,
  setCurrentCodeId,
  cIndex,
  ...props
}) => {
  const [active, setActive] = useState("overview");

  const findSectionIndex = (item) => {
    let index = sections.indexOf(item);
    setCurrentCode(index);
  };

  function handleSelect(active) {
    setCurrentCodeId(active)
    setActive(active);
  }

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
        <Nav.Item eventKey="overview">Project Overview</Nav.Item>
        {sections.map((section) => (
          <Nav.Item
            onClick={() => {
              findSectionIndex(section);
            }}
            key={section.code_id}
            eventKey={section.code_id}
          >
            {section.code_title}
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    sections: state.projects_data.sections,
    cIndex: state.application_state.currentCode
  };
};

export default connect(mapStateToProps, {
  fetchCodeSection,
  setCurrentCode,
  setCurrentCodeId
})(CodeList);
