import React from 'react';
import PropTypes from 'prop-types';
import { withServiceConsumer } from 'services/Context';

const propTypes = {
	children: PropTypes.node.isRequired,
	service: PropTypes.shape({
		pref: PropTypes.string.isRequired,
	}).isRequired,
};

const Container = ({ children, service: { pref } }) => {
	return <div className={`container container_${pref}`}>{children}</div>;
};

Container.propTypes = propTypes;

export default withServiceConsumer(Container);
