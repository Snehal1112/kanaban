import React, { Component } from 'react';
import ContextMenu from '../components/ContextMenu';
import ContextItem from '../components/ContextItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserAlt, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
library.add(faUserAlt, faSearch, faBars);
class KanabanNav extends Component {
	/**
	 * 
	 * @param {*} props 
	 */
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

	/**
	 * 
	 * @param {*} e 
	 */
	onContextMenuClick(e) {
		e.preventDefault();
		this.setState({ visible: true, position: { x: e.clientX, y: e.clientY } });
	}

	/**
	 * 
	 * @param {*} e 
	 */
	onClickContextMenu(e) {
		this.setState({ visible: false });
	}

	/**
	 * 
	 */
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
					<ContextMenu position={this.state.position} onClickContextMenu={this.onClickContextMenu.bind(this)}>
						<ContextItem title={'Profile'} />
						<ContextItem title={'snehal2'} />
						<ContextItem title={'snehal3'} />
						<ContextItem title={'Settings'} />
						<ContextItem className={'hr'} />
						<ContextItem title={'Logout'} />
					</ContextMenu>
				) : (
					''
				)}
			</div>
		);
	}
}
export default KanabanNav;