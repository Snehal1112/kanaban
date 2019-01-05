import React, { Component } from "react";
import KanbanBoard from "./components/KanbanBoard";
import Login from "./components/Login";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { authenticate } from "./actions/Authentication";

/*
 * The Kanban React component
 */
class App extends Component {
  render() {
    return true ? <Login /> : <KanbanBoard />;
  }
}

App.propTypes = {
  result: PropTypes.object
};

const mapStateToProps = state => ({
  result: state.auth.result
});

export default connect(
  mapStateToProps,
  { authenticate }
)(App);
