import React, { Component } from "react";
import KanbanBoard from "./components/KanbanBoard";

import "./index.css";
/*
 * The Kanban React component
 */
class App extends Component {
  render() {
    const style = {};

    return (
      <div style={style}>
        <div
          style={{
            padding: "20px 0px 20px 0px",
            width: "100%",
            backgroundColor: "#3498db"
          }}
        />
        <KanbanBoard />
      </div>
    );
  }
}

export default App;
