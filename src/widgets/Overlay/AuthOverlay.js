import React, { useEffect, useState, useSelector } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import { Content, Main } from 'templates/Content';
import Header from 'app/View/Header/index';
import Footer from 'app/View/Footer/index';
// import { auth } from 'services';
import { connect } from 'react-redux';
import { Web3Actions } from 'app/Actions';
import Constants from 'app/Constants';

const AuthOverlay = ({ children, auth, verified, setUrlRefs }) => {
	const { pathname, search } = useLocation();

	const loggedIn = ['/', '/email-verification'];
	const loggedOut = ['/login', '/registration', '/forgot'];
	const isAuthPage = loggedOut.includes(pathname);
	useEffect(() => {
		const value = search.split('ref=')[1];
		if (value && value.length == 42 && value.includes('0x')) {
			setUrlRefs(value);
		}
	});
	if (!auth && !isAuthPage) {
		return <Redirect to='/login' />;
	} else if (auth && isAuthPage) {
		if (!verified) {
			return <Redirect to='/email-verification' />;
		} else {
			return <Redirect to='/' />;
		}
	}

	return (
		<>
			<Content>
				<Header isAuth={!loggedIn.includes(pathname)} />
				<Main>{children}</Main>
				{auth && verified && <Footer />}
			</Content>
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		auth: !state.firebase.auth.isEmpty,
		verified: state.firebase.auth.emailVerified,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setUrlRefs: (value) =>
			Web3Actions.setRefUrl(
				dispatch({ type: Constants.SET_URL_REF, data: { refId: value } })
			),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthOverlay);
