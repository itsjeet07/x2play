import React from 'react';
import PropTypes from 'prop-types';
import { withServiceConsumer } from 'services/Context';
import { roles } from 'services';
import { Avatar } from 'templates/Avatar';

const propTypes = {
	avatar: PropTypes.string,
	role: PropTypes.string,
	firstName: PropTypes.string,
	lastName: PropTypes.string,
	description: PropTypes.string,
	date: PropTypes.string,
};

const defaultProps = {
	avatar: '',
	role: '',
	firstName: '',
	lastName: '',
	description: '',
	date: '',
};

const TableProfileRow = ({
	avatar,
	role,
	firstName,
	lastName,
	description,
	date,
	service: { pref },
}) => {
	const _role = roles[role] || '';
	return (
		<div className={`main-table__profile main-table__profile_${pref}`}>
			<div
				className={`main-table__profile-avatar main-table__profile-avatar_${pref}`}
			>
				<Avatar avatar={avatar} firstName={firstName} lastName={lastName} />
			</div>
			<div
				className={`main-table__profile-content main-table__profile-content_${pref}`}
			>
				{_role && (
					<div
						className={`main-table__profile-head main-table__profile-head_${pref}`}
					>
						{_role}
					</div>
				)}
				<div
					title={`${firstName} ${lastName}`}
					className={`main-table__profile-body main-table__profile-body_${pref}`}
				>
					{firstName} {lastName}
				</div>
				{description && (
					<div
						className={`main-table__profile-desc main-table__profile-desc_$pref`}
					>
						{description}
					</div>
				)}
				{date && (
					<div
						className={`main-table__profile-foot main-table__profile-foot_${pref}`}
					>
						{date}
					</div>
				)}
			</div>
		</div>
	);
};

TableProfileRow.propTypes = propTypes;
TableProfileRow.defaultProps = defaultProps;

export default withServiceConsumer(TableProfileRow);
