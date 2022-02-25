import React from 'react';
import PropTypes from 'prop-types';
import { withServiceConsumer } from 'services/Context';
import { getShareLink } from 'services';

const propTypes = {
	href: PropTypes.string.isRequired,
};

const ShareLinkRow = ({ href, service: { pref } }) => {
	const link = getShareLink(href);

	return (
		<div className={`share-link share-link_${pref}`}>
			<a
				href={link}
				target='_blanc'
				title={link}
				className={`share-link__link share-link__link_${pref}`}
			>
				{link}
			</a>
		</div>
	);
};

ShareLinkRow.propTypes = propTypes;

export default withServiceConsumer(ShareLinkRow);
