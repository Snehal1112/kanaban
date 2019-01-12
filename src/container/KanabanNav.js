import React, { Component } from 'react';
import ContextMenu from '../components/ContextMenu';
import ContextItem from '../components/ContextItem';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/Authentication';

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
		this.setState({ visible: true, position: { x: e.pageX, y: e.pageY } });
	}

	/**
	 * 
	 * @param {*} e 
	 */
	onClickContextMenu(e) {
		switch (e.target.getAttribute('name')) {
			case 'logout':
				this.props.logout();
				break;
		}
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
						<a href="#" className="nav-item" onClick={(e) => this.onContextMenuClick(e)}>
							<FontAwesomeIcon icon={faUserAlt} color="#fff" />
						</a>
					</li>
				</ul>
				{this.state.visible ? (
					<ContextMenu position={this.state.position} onClickContextMenu={this.onClickContextMenu.bind(this)}>
						<ContextItem title={'Profile'} />
						<ContextItem title={'Settings'} />
						<ContextItem type={'menu-splitter'} />
						<ContextItem type={'button'} title={'Logout'} />
					</ContextMenu>
				) : (
					''
				)}
			</div>
		);
	}
}

KanabanNav.propTypes = {
	logout: PropTypes.func
};
const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { logout })(KanabanNav);
