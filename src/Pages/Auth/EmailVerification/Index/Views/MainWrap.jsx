import React from 'react';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { withTagDefaultProps } from 'hoc';
import { withServiceConsumer } from 'services/Context';
import { AuthSidebar } from 'widgets/AuthSidebar';
import BlockForm from './BlockForm';
import BlockSuccess from './BlockSuccess';

const propTypes = {
	status: PropTypes.string.isRequired,
};

const MainWrap = ({ status, t }) => {
	return (
		<div className='auth'>
			<AuthSidebar />
			{/* <div className="auth__content">{status === 'success' ? <BlockSuccess /> : <BlockForm />}</div> */}
			<div className='auth__content'>
				<BlockSuccess />
			</div>
		</div>
	);
};

MainWrap.propTypes = propTypes;

const mapStateToProps = (state, ownProps) => {
	const { getStoreItem } = ownProps.service;

	return {
		status: getStoreItem(state, 'status', ''),
	};
};

export default compose(
	withServiceConsumer,
	withTagDefaultProps(mapStateToProps, null)
)(MainWrap);
