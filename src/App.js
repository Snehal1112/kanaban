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
		return <div>{withSubscription(Login, KanbanBoard, this.props)}</div>;
	}
}

App.propTypes = {
	data: PropTypes.object
};

const mapStateToProps = (state) => ({
	data: state.auth.data ? state.auth.data : { loading: false }
});

export default connect(mapStateToProps, {})(App);
