import React from 'react';
import { compose } from 'redux';
import { withTagDefaultProps } from 'hoc';
import { withServiceConsumer } from 'services/Context';
import { AuthSidebar } from 'widgets/AuthSidebar';
import BlockForm from './BlockForm';

const MainWrap = () => {
	return (
		<div className='auth'>
			<AuthSidebar />
			<div className='auth__content'>
				<BlockForm />
			</div>
		</div>
	);
};

export default compose(
	withServiceConsumer,
	withTagDefaultProps(null, null)
)(MainWrap);
