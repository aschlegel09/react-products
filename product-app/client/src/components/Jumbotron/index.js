import React from "react";
import Fade from 'react-reveal/Fade';
               
function Jumbotron({ children }) {
  return (
    <Fade up>
    <div
      style={{ height: "auto", clear: "both", paddingTop: 120, textAlign: "center", marginTop: 80, backgroundColor: "#e5e5e5" }}
      className="jumbotron"
    >
      {children}
    </div>
    </Fade>
  );
}

export default Jumbotron;
