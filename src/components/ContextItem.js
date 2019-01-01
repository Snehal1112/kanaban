import React from 'react';

function ContextItem(props) {
	return (
		<div className={`context-item ${props.className}`} style={props.styles}>
			{props.title}
		</div>
	);
}

export default ContextItem;
