import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Preloader } from 'templates/Preloader';

const PreloaderHoc =
	(WrappedComponent) =>
	({ appLoading, pageLoading, ...props }) => {
		const loading = [appLoading, pageLoading].includes(true);
		return (
			<>
				<Preloader loading={loading} />
				<WrappedComponent {...props} />
			</>
		);
	};

const mapStateToProps = (state) => ({
	appLoading: state.appState.loading,
	pageLoading: state.pageState.loading,
});

export default (WrappedComponent) =>
	compose(connect(mapStateToProps), PreloaderHoc)(WrappedComponent);
