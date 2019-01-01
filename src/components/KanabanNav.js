import React, { Component } from 'react';
import ContextMenu from './ContextMenu';
import ContextItem from './ContextItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserAlt, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
library.add(faUserAlt, faSearch, faBars);
class KanabanNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
			position: {
				x: 0,
				y: 0
			}
		};
		this.myRef = React.createRef();
	}
	onContextMenuClick(e) {
		e.preventDefault();
		this.setState({ visible: true, position: { x: e.clientX, y: e.clientY } });
	}

	onClickContextMenu(e) {
		console.log(e.target);
	}
	render() {
		return (
			<div className="top-nav">
				<ul className="sub-nav">
					<li>
						<a href="#" className="nav-bar-btn">
							<FontAwesomeIcon icon={faBars} />
						</a>
					</li>
				</ul>
				<div className="search-container">
					<input className="search-text" placeholder="Search in" type="text" />
					<a href="#" className="search-btn">
						<FontAwesomeIcon icon={faSearch} />
					</a>
				</div>
				<ul className="sub-nav">
					<li>
						<span>Snehal Dangroshiya</span>
						<a href="#" className="nav-item" onContextMenu={(e) => this.onContextMenuClick(e)}>
							<FontAwesomeIcon icon={faUserAlt} color="#fff" />
						</a>
					</li>
				</ul>
				{this.state.visible ? (
					<ContextMenu position={this.state.position} onClickContextMenu={this.onClickContextMenu}>
						<ContextItem title={'snehal1'} />
						<ContextItem title={'snehal2'} />
						<ContextItem title={'snehal3'} />
						<ContextItem title={'snehal4'} />
					</ContextMenu>
				) : (
					''
				)}
			</div>
		);
	}
}
export default KanabanNav;
