import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: "auto", clear: "both", paddingTop: 120, textAlign: "center", marginTop: 80 }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
