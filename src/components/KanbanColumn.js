import React, { Component } from "react";
import KanbanCard from "./KanbanCard";

/*
 * The Kanban Board Column React component
 */
class KanbanColumn extends Component {
  constructor(props) {
    super(props);
    this.state = { mouseIsHovering: false };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ mouseIsHovering: false });
  }

  generateKanbanCards() {
    return this.props.projects.slice(0).map(project => {
      return (
        <KanbanCard
          project={project}
          key={project.name}
          onDragEnd={this.props.onDragEnd}
        />
      );
    });
  }

  render() {
    const columnStyle = {
      display: "inline-block",
      verticalAlign: "top",
      marginRight: "5px",
      marginBottom: "5px",
      paddingLeft: "5px",
      paddingTop: "0px",
      borderRadius: "5px",
      width: "230px",
      textAlign: "center",
      boxShadow: "2px 2px 10px #34495e",
      backgroundColor: this.state.mouseIsHovering ? "#ecf0f1" : "#bdc3c7"
    };
    return (
      <div
        style={columnStyle}
        onDragEnter={e => {
          this.setState({ mouseIsHovering: true });
          this.props.onDragEnter(e, this.props.stage);
        }}
        onDragExit={e => {
          this.setState({ mouseIsHovering: false });
        }}
      >
        <h4>
          {this.props.stage}. {this.props.name} ({this.props.projects.length})
        </h4>
        {this.generateKanbanCards()}
        <br />
      </div>
    );
  }
}

export default KanbanColumn;
