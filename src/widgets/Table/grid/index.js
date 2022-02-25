import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { withServiceConsumer } from 'services/Context';
import { withTagDefaultProps } from 'hoc';
import { DocumentsItem } from 'templates/Grid';

const propTypes = {
	buttons: PropTypes.arrayOf(PropTypes.object),
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
	onClickItem: PropTypes.func.isRequired,
	service: PropTypes.shape({
		path: PropTypes.string,
	}).isRequired,
};

const defaultProps = {
	buttons: [],
};

const Grid = ({ buttons, items, onClickItem }) => {
	return (
		<div className='main-grid'>
			<ul className='main-grid__list'>
				{items.map((item) => (
					<li key={item._id} className='main-grid__item'>
						<DocumentsItem
							onClickItem={() => onClickItem(item)}
							title={item['name'] || item['title']}
							type={item['type']}
							item={item}
							buttons={buttons}
						/>
					</li>
				))}
			</ul>
		</div>
	);
};

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;

const mapStateToProps = (state, { service: { getStoreItem } }) => {
	return {
		items: getStoreItem(state, 'items', []),
		columns: getStoreItem(state, 'columns', []),
	};
};

export default compose(
	withServiceConsumer,
	withTagDefaultProps(mapStateToProps)
)(Grid);
