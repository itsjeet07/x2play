import React, { createRef, useEffect } from 'react';
import { compose } from 'redux';
import { withTagDefaultProps } from 'hoc';
import { withServiceConsumer } from 'services/Context';
import { safeRequest } from 'services/Request';
import Table from './table';
import Grid from './grid';

const RenderType = ({
	type,
	buttons,
	onClickItem,
	onSortClick,
	withoutHead,
}) => {
	switch (type) {
		case 'grid':
			return (
				<Grid
					buttons={buttons}
					onClickItem={onClickItem}
					onSortClick={onSortClick}
				/>
			);

		default:
			return (
				<Table
					buttons={buttons}
					onClickItem={onClickItem}
					onSortClick={onSortClick}
					withoutHead={withoutHead}
				/>
			);
	}
};

const ContainerTable = ({
	buttons,
	type,
	request,
	fetchItems: _fetchItems,
	fetchPage: _fetchPage,
	onClickItem,
	withoutHead,
	pagination,
	service: { pref, handleScroll },
	loading,
}) => {
	const { page = 1, pages = 1 } = pagination;
	const ref = createRef();
	const fetchItems = safeRequest(_fetchItems);
	const fetchPage = safeRequest(_fetchPage);

	const initialFetch = () => {
		if (page >= pages) return;
		if (loading) return;

		request.page = page + 1;
		fetchPage(request);
	};

	useEffect(() => {
		const { current } = ref;
		if (current.scrollHeight <= current.clientHeight) {
			initialFetch();
		}
	}, [ref]);

	useEffect(() => {
		fetchItems(request);
	}, [JSON.stringify(request)]);

	const onScroll = (e) => {
		if (page >= pages) return;
		if (loading) return;

		handleScroll(e).then(() => {
			request.page = page + 1;

			fetchPage(request);
		});
	};

	const onSubmit = (e) => {
		e.preventDefault();
		fetchItems(request);
	};

	const onSortClick = (column) => {
		const asc = 'asc';
		const desc = 'desc';
		const newRequest = {
			...request,
			sort: {
				...request.sort,
				column,
			},
		};
		if (request.sort.column === column) {
			newRequest.sort.direction = request.sort.direction === asc ? desc : asc;
		} else {
			newRequest.sort.direction = asc;
		}

		safeRequest(fetchItems(newRequest));
	};

	return (
		<div
			ref={ref}
			className={`form-wrap form-wrap_${pref}`}
			onScroll={onScroll}
		>
			<form onSubmit={onSubmit}>
				<RenderType
					type={type}
					buttons={buttons}
					onClickItem={onClickItem}
					onSortClick={onSortClick}
					withoutHead={withoutHead}
				/>

				<button type='submit' className='visuallyhidden' />
			</form>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	const { getStoreItem } = ownProps.service;

	return {
		loading: getStoreItem(state, 'loading'),
		pagination: getStoreItem(state, 'pages'),
		request: {
			filter: {
				...getStoreItem(state, 'filter', true),
			},
			sort: {
				...getStoreItem(state, 'sort', true),
			},
		},
	};
};

const mapDispatchToProps = (dispatch, { service }) => {
	const { getActionStore } = service;

	return {
		fetchItems: getActionStore('fetchItems')(dispatch),
		fetchPage: getActionStore('fetchPage')(dispatch),
	};
};

export default compose(
	withServiceConsumer,
	withTagDefaultProps(mapStateToProps, mapDispatchToProps)
)(ContainerTable);
