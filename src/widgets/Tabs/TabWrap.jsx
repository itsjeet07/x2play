import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { PermissionsProps } from 'hoc';

const propTypes = {
	children: PropTypes.node.isRequired,
	permissions: PropTypes.arrayOf(PropTypes.string).isRequired,
	permission: PropTypes.arrayOf(PropTypes.string),
};

const defaultProps = {
	permission: null,
};

const TabWrap = ({ children, permissions, permission }) => {
	if (!permission) return children;
	return (
		<>{permissions.some((v) => permission.includes(v)) ? children : null}</>
	);
};

TabWrap.propTypes = propTypes;
TabWrap.defaultProps = defaultProps;

export default compose(PermissionsProps)(TabWrap);
