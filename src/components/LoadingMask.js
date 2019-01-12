import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

library.add(faSpinner);
const style = {
	height: '-webkit-fill-available',
	display: 'flex',
	color: 'white',
	justifyContent: 'center',
	backgroundColor: '#000',
	opacity: '0.5',
	alignItems: 'center'
};
function LoadingMask(props) {
	return (
		<div style={style}>
			<FontAwesomeIcon icon={faSpinner} spin size="3x" />
		</div>
	);
}
export default LoadingMask;
