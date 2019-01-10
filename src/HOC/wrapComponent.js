import React from 'react';
import util from '../utils';
export const withSubscription = (WrappedComponent, AlternateWrappedComponent, props = {}) => {
	let { is_oauth } = props;
	return util.isEmpty(is_oauth) ? <WrappedComponent data={props} /> : <AlternateWrappedComponent data={props} />;
};
