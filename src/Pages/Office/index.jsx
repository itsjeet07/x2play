import React from 'react';
import { compose } from 'redux';
import { LoadPage, withTagDefaultProps } from 'hoc';
import { ServiceProvider } from 'services/Context';
import { Container } from 'templates/Content';
import { MainWrap } from './Views';
import * as service from '../Cabinet/Index/services';

const propTypes = {};

const Office = () => {
	return (
		<ServiceProvider value={service}>
			<Container>
				<MainWrap />
			</Container>
		</ServiceProvider>
	);
};

Office.propTypes = propTypes;

const mapDispatchToProps = (dispatch) => ({
	onLoad: service.getActionStore('pageLoad')(dispatch),
});

export default compose(
	withTagDefaultProps(null, mapDispatchToProps),
	LoadPage
)(Office);
