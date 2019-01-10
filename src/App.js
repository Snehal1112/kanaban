import React, { Component } from 'react';
import KanbanBoard from './container/KanbanBoard';
import Login from './container/Login';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withSubscription } from './HOC/wrapComponent';
/*
 * The Kanban React component
 */
class App extends Component {
	render() {
		let { data = undefined } = this.props;
		return <div>{withSubscription(Login, KanbanBoard, data)}</div>;
	}
}

App.propTypes = {
	data: PropTypes.object
};

const mapStateToProps = (state) => ({
	data: state.auth.data
});

export default connect(mapStateToProps, {})(App);
