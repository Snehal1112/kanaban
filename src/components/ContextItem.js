import React from 'react';
import Utils from '../utils';
function ContextItem(props) {
	let { title = '', className, styles = {}, type = 'button' } = props;
	if (Utils.isEmpty(title) && type !== 'menu-splitter') {
		console.warn('ContextItem should have proper title');
	} else if (type === 'menu-splitter' && Utils.isEmpty(className)) {
		className = 'hr';
	}
	return (
		<li name={title.toLowerCase()} className={`context-item ${className ? className : ''}`} style={styles}>
			{title}
		</li>
	);
}

export default ContextItem;
