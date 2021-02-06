import React, { useState } from "react";
import { Nav, Navbar, Icon } from "rsuite";
import SettingsMenu from "./settingsMenu";

const BottomNav = () => {
  const navBarStyles = {
    position: "absolute",
    bottom: 0,
    width: "100%",
  };

  const headerStyle = {
    display: "inline-block",
    marginTop: "4%",
    marginLeft: "0.3rem",
  };

  const [show, setShow] = useState(false);

  const toggleDrawer = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <>
      <SettingsMenu show={show} toggleDrawer={toggleDrawer}/>

      <Navbar className={"unstyledList"} style={navBarStyles}>
        <Navbar.Header>
          <h2 style={headerStyle}>Tools:</h2>
        </Navbar.Header>
        <Navbar.Body>
          <Nav>
            <Nav.Item>+ Project</Nav.Item>
            <Nav.Item>+ Code</Nav.Item>
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

export default BottomNav;
