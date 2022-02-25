import React from 'react';
import PropTypes from 'prop-types';
import { withServiceConsumer } from 'services/Context';

const propTypes = {
	activeTab: PropTypes.bool.isRequired,
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	service: PropTypes.shape({
		pref: PropTypes.string.isRequired,
	}).isRequired,
};

const Tab = ({ activeTab, label, onClick, service: { pref } }) => (
	<button
		type='button'
		className={`tabs-controls__btn tabs-controls__btn_${pref} ${
			activeTab ? 'tabs-controls__btn_active' : ''
		}`}
		onClick={onClick}
	>
		{label}
	</button>
);

Tab.propTypes = propTypes;

export default withServiceConsumer(Tab);
