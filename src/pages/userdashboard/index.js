import React, { useEffect, useState } from "react";
import BottomNav from "../../sharedComponents/bottomNav";
import LeftNav from "../../sharedComponents/leftNav";
import { connect } from "react-redux";
import Home from "./dashboard/home";
import ProjectView from "./projects";

function UserDashboard({ currentPanel }) {
  const [view, setView] = useState("home");
  const contentContainer = {
    width: "100%",
  };

  useEffect(() => {
    setView(currentPanel);
  }, [currentPanel]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <LeftNav setView={setView} />
        <div style={contentContainer}>
          {view === "home" ? <Home/> : <ProjectView />}
        </div>
      </div>
      <BottomNav />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    currentPanel: state.currentPanel,
  };
};

export default connect(mapStateToProps, {})(UserDashboard);
