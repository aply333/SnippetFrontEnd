import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Nav } from "rsuite";
import {
  fetchProjects,
  setCurrentPanel,
  fetchCodeSection,
  setCurrentCode,
  fetchProjectTags,
  setCurrentCodeId
} from "../actions/index";

const LeftNav = ({
  fetchProjects,
  projects,
  user_data,
  setCurrentPanel,
  setView,
  fetchCodeSection,
  setCurrentCode,
  fetchProjectTags,
  setCurrentCodeId
}) => {
  useEffect(() => {
    fetchProjects(user_data.username, user_data.user_id);
  }, []);

  const contentStyles = {
    width: "10rem",
    height: "95vh",
    marginLeft: "0.5rem",
  };

  const NavContents = ({ active, onSelect, ...props }) => {
    return (
      <Nav
        {...props}
        vertical
        activeKey={active}
        onSelect={onSelect}
        style={contentStyles}
      >
        <Nav.Item eventKey={null}> </Nav.Item>
        <Nav.Item eventKey="home">Home</Nav.Item>
        {projects.map((project) => (
          <Nav.Item eventKey={project.project_id} key={project.project_id}>
            {project.project_title}
          </Nav.Item>
        ))}
      </Nav>
    );
  };

  const [active, setActive] = useState("home");

  function handleSelect(active) {
    setCurrentCode("")
    setActive(active);
    setCurrentPanel(active);
    setView(active);
    setCurrentCodeId("overview")
    if (Number.isInteger(active)) {
      fetchCodeSection( user_data.username, user_data.user_id, active);
      fetchProjectTags( user_data.username, user_data.user_id, active);
    }
  }

  return (
    <NavContents appearance="tabs" active={active} onSelect={handleSelect} />
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects_data.projects,
    user_data: state.user_data,
  };
};

export default connect(mapStateToProps, {
  fetchProjects,
  setCurrentPanel,
  fetchCodeSection,
  fetchProjectTags,
  setCurrentCode,
  setCurrentCodeId
})(LeftNav);
