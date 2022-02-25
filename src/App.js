import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AuthOverlay } from 'widgets/Overlay';
import { PreloaderHoc } from 'hoc';
import { ScrollToTop } from 'templates/ScrollToTop';
import { Wrapper } from 'templates/Content';
import Error from 'pages/Error/Index/index';
import Login from 'pages/Auth/Login/Index';
import Registration from 'pages/Auth/Registration/Index';
import EmailVerification from 'pages/Auth/EmailVerification/Index';
import Forgot from 'pages/Auth/Forgot/Index';
import Cabinet from 'pages/Cabinet/Index/index';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	return (
		<BrowserRouter>
			<ScrollToTop />
			<ToastContainer />
			<Wrapper>
				<AuthOverlay>
					<Switch>
						<Route exact path='/' component={Cabinet} />
						<Route path='/login' component={Login} />
						<Route path='/registration' component={Registration} />
						<Route path='/forgot' component={Forgot} />
						<Route path='/email-verification' component={EmailVerification} />
						<Route path='*' component={Error} />
					</Switch>
				</AuthOverlay>
			</Wrapper>
		</BrowserRouter>
	);
};

export default PreloaderHoc(App);
