import React from 'react';
import { compose } from 'redux';
import { LoadPage, withTagDefaultProps } from 'hoc';
import { ServiceProvider } from 'services/Context';
import { Container } from 'templates/Content';
import { MainWrap } from './Views';
import * as service from './Services';

const Registration = () => {
	return (
		<ServiceProvider value={service}>
			<Container>
				<MainWrap />
			</Container>
		</ServiceProvider>
	);
};

const mapDispatchToProps = (dispatch) => ({
	onLoad: service.getActionStore('pageLoad')(dispatch),
});

export default compose(
	withTagDefaultProps(null, mapDispatchToProps),
	LoadPage
)(Registration);
