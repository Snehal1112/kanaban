import React, { Component } from 'react';
import './ContextMenu.scss';
class ContextMenu extends Component {
	constructor(props) {
		super(props);
		this.contextModel = React.createRef();
	}
	componentDidMount() {
		console.log(this.contextModel.current.firstChild.focus());
	}
	render() {
		const { children } = this.props;
		return (
			<ul
				className={'context-menu'}
				style={{
					top: this.props.position.y,
					right: this.props.position.y
				}}
				ref={this.contextModel}
				onClick={this.props.onClickContextMenu}
				onFocus={(e) => {
					console.log(e);
				}}
			>
				{children}
			</ul>
		);
	}
}

export default ContextMenu;
