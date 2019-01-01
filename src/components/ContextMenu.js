import React, { Component } from 'react';
class ContextMenu extends Component {
	render() {
		const { children } = this.props;
		return (
			<div
				className={'context-menu'}
				style={{
					top: this.props.position.y,
					right: this.props.position.y
				}}
				onClick={this.props.onClickContextMenu}
			>
				{children}
			</div>
		);
	}
}

export default ContextMenu;
