import React from "react";
import "./styles.css";
// import SideBarContainer from "./SideBar/SideBarContainer/SideBarContainer";

import Typography from "@mui/material/Typography";
import ResultsContainer from "./ResultsPage/ResultsContainer/ResultsContainer";
import { SideBar } from "./CoreUISideBar/SideBar";
function App() {
  return (
    <>
      <Typography sx={{ fontFamily: "Inter, sans-serif" }}>
        {/* <SideBarContainer /> */}
        <div className="page-cover">
          <SideBar />
          <ResultsContainer />
        </div>
      </Typography>
    </>
  );
}

export default App;
