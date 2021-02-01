import React from "react";
import { Nav, Navbar } from "rsuite";

const BottomNav = () => {
  const navBarStyles = {
    display: "flex",
    position: "absolute",
    bottom: 0,
    width: "100%",
  };
  return (
    <Navbar className={"unstyledList"} style={navBarStyles}>
      <Navbar.Header>
        <h2
          style={{
            display: "inline-block",
            marginTop: "4%",
            marginLeft: "0.3rem",
          }}
        >
          Tools:
        </h2>
      </Navbar.Header>
      <Navbar.Body>
        <Nav>
          <Nav.Item>+ Project</Nav.Item>
          <Nav.Item>+ Code Snippet</Nav.Item>
        </Nav>
        <Nav pullRight>
          <Nav.Item>Settings</Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

export default BottomNav;
