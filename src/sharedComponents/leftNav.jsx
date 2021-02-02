import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Nav } from "rsuite";
import { fetchProjects, setCurrentPanel } from "../actions/index";

const LeftNav = ({ fetchProjects, projects, user_data, setCurrentPanel, setView }) => {
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
          <Nav.Item eventKey={project.project_id}>
            {project.project_title}
          </Nav.Item>
        ))}
      </Nav>
    );
  };

  const [active, setActive] = useState("home");

  const handleSelect = (active) => {
    setActive(active);
    setCurrentPanel(active)
    setView(active)
  };

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

export default connect(mapStateToProps, { fetchProjects, setCurrentPanel })(
  LeftNav
);
