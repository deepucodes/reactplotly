import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import GraphScreen from "./graph-main/graphScreen";

function App() {

  return (
    <div className="App">
      <div>
        <GraphScreen/>
      </div>
    </div>
  );
}

export default App;
