import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserAlt, faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
library.add(faUserAlt, faSearch, faBars);
class KanabanNav extends Component {
	render() {
		return (
			<div className="top-nav">
				<div>
					<a href="#" className="nav-bar-btn">
						<FontAwesomeIcon icon={faBars} />
					</a>
				</div>
				<div className="search-container">
					<input className="search-text" placeholder="Search in" type="text" />
					<a href="#" className="search-btn">
						<FontAwesomeIcon icon={faSearch} style={{}} />
					</a>
				</div>
				<ul
					style={{
						listStyle: 'none',
						color: '#fff',
						margin: 0,
						padding: 0
					}}
				>
					<li
						style={{
							border: '2px solid green',
							borderRadius: '50%',
							padding: '10px',
							margin: '5px',
							backgroundColor: 'lightslategrey'
						}}
					>
						<a>
							<FontAwesomeIcon icon={faUserAlt} color="#fff" />
						</a>
					</li>
				</ul>
			</div>
		);
	}
}
export default KanabanNav;
