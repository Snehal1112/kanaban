import React, { Component } from 'react';

class ContextItem extends Component {
	render() {
		return <div style={{ padding: '10px' }}>{this.props.title}</div>;
	}
}

export default ContextItem;
