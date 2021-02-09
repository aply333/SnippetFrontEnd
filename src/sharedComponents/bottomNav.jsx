import React, { useState, useEffect } from "react";
import { Nav, Navbar, Icon } from "rsuite";
import NewCode from "./bottomNavContents/newCode";
import NewProject from "./bottomNavContents/newProject";
import SettingsMenu from "./bottomNavContents/settingsMenu";
import { postNewProject, postNewCode } from "../actions/postActions";
import { connect } from "react-redux";
import { navBarStyles, headerStyle } from "./bottomNavContents/bottomNavConsts";

const BottomNav = ({ user_data, postNewProject, currentPanel, postNewCode }) => {
  const [codeButton, setCodeButton] = useState(false);
  useEffect(() => {
    if (currentPanel === "home") {
      setCodeButton(false);
    } else {
      setCodeButton(true);
    }
  }, [currentPanel]);

  const [show, setShow] = useState(false);
  const [showPr, setShowPr] = useState(false);
  const [showCd, setShowCd] = useState(false);

  const toggleDrawer = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const toggleProjectButton = () => {
    if (showPr === false) {
      setShowPr(true);
    } else {
      setShowPr(false);
    }
  };

  const toggleCodeButton = () => {
    if (showCd === false) {
      setShowCd(true);
    } else {
      setShowCd(false);
    }
  };

  const [newProjectData, setNewProjectData] = useState("");
  const postAction = () => {
    if (newProjectData !== "") {
      postNewProject(
        user_data.username,
        user_data.user_id,
        newProjectData.title
      );
    }
  };
  useEffect(() => {
    postAction();
  }, [newProjectData]);

  const [newCodeData, setCodeData] = useState("");
  const postCodeAction = () => {
    if (newCodeData !== ""){
      postNewCode(
        user_data.username,
        currentPanel,
        newCodeData
      )
    }
  }
  useEffect(()=>{
    postCodeAction()
  }, [newCodeData])

  return (
    <>
      <SettingsMenu show={show} toggleDrawer={toggleDrawer} />
      <NewProject
        show={showPr}
        toggleDrawer={toggleProjectButton}
        setNewProjectData={setNewProjectData}
      />
      <NewCode 
        show={showCd} 
        toggleDrawer={toggleCodeButton} 
        setCodeData={setCodeData}/>

      <Navbar className={"unstyledList"} style={navBarStyles}>
        <Navbar.Header>
          <h2 style={headerStyle}>Tools:</h2>
        </Navbar.Header>
        <Navbar.Body>
          <Nav>
            <Nav.Item
              onClick={() => {
                toggleProjectButton();
              }}
            >
              + Project
            </Nav.Item>
            {codeButton ? (
              <Nav.Item
                onClick={() => {
                  toggleCodeButton();
                }}
              >
                + Code
              </Nav.Item>
            ) : null}
          </Nav>
          <Nav pullRight>
            <Nav.Item
              icon={<Icon icon="cog" />}
              onClick={() => {
                toggleDrawer();
              }}
            >
              Settings
            </Nav.Item>
          </Nav>
        </Navbar.Body>
      </Navbar>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user_data: state.user_data,
    currentPanel: state.application_state.currentPanel,
  };
};

export default connect(mapStateToProps, { postNewProject, postNewCode })(BottomNav);
