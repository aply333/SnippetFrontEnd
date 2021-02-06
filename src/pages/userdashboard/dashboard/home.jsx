import React from "react";
import { Panel } from "rsuite";
import { connect } from "react-redux";
import ProjectTable from "./projectTable";
import {
  imgStyles,
  homeContainer,
  rightPanelStyles,
  internalRightStyles,
} from "./homeStyles";

const Home = ({ projects }) => {
  return (
    <div style={homeContainer}>
      <div className="leftSide">
        <Panel shaded bordered bodyFill>
          <img style={imgStyles} src="https://via.placeholder.com/500" />
          <Panel header="Latest Changes">
            <ProjectTable />
          </Panel>
        </Panel>
      </div>
      <div className="rightSide">
        <Panel shaded bordered bodyFill style={{ padding: "1rem" }}>
          <div style={rightPanelStyles}>
            {projects.map((project) => (
              <Panel
                header={project.project_title}
                style={internalRightStyles}
                collapsible
                bordered
              >
                <p>Place hodler data, to be filled on backend update.</p>
              </Panel>
            ))}
          </div>
        </Panel>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    projects: state.projects_data.projects,
  };
};

export default connect(mapStateToProps, {})(Home);
