import React from 'react';
import LoadingMask from '../components/LoadingMask';
import utils from '../utils';
const getToken = () => {
	return localStorage.getItem('token');
};
export const withSubscription = (WrappedComponent, AlternateWrappedComponent, { data }) => {
	let { loading } = data;
	console.log(data);
	return loading ? (
		<LoadingMask />
	) : !utils.isEmpty(getToken()) ? (
		// kanban board
		<AlternateWrappedComponent data={data} />
	) : (
		// login page
		<WrappedComponent data={data} />
	);
};
