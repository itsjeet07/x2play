import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { CheckPermission } from 'hoc';
import { withServiceConsumer } from 'services/Context';
import Tab from './Tab';

const propTypes = {
	children: PropTypes.instanceOf(Array).isRequired,
};

const Tabs = ({ service: { pref }, children }) => {
	const [activeTab, setActiveTab] = useState(0);
	const onClick = (index) => setActiveTab(index);

	return (
		<div className={`tabs tabs_${pref}`}>
			<div className={`tabs-controls tabs-controls_${pref}`}>
				{children.map((child, index) => {
					const { label, permission = null, request } = child.props;
					const _onClick = () => {
						request && request();
						onClick(index);
					};
					return (
						<CheckPermission key={`Tabs-${index}`} permission={permission}>
							<Tab
								activeTab={activeTab === index}
								key={label}
								label={label}
								onClick={_onClick}
							/>
						</CheckPermission>
					);
				})}
			</div>

			<div className={`tabs-content tabs-content_${pref}`}>
				<div key={`TabsItem`} className='tabs-content__item'>
					{children[activeTab]}
				</div>
			</div>
		</div>
	);
};

Tabs.propTypes = propTypes;

export default compose(withServiceConsumer)(Tabs);
