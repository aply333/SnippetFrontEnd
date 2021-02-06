import React from "react";
import { Drawer } from "rsuite";

const SettingsMenu = ({ show, toggleDrawer }) => {
  const SettingStyle = {
    width: "25rem",
  };
  return (
    <>
      <Drawer show={show} onHide={toggleDrawer} style={SettingStyle}>
        <Drawer.Header>Settings Menu</Drawer.Header>
        <Drawer.Body>
            
        </Drawer.Body>
      </Drawer>
    </>
  );
};

export default SettingsMenu;
