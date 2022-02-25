import React from 'react';
import { compose } from 'redux';
import { useHistory } from 'react-router-dom';
import { LoadPage, withTagDefaultProps } from 'hoc';
import { ServiceProvider } from 'services/Context';
import { Container, Wrap } from 'templates/Content';
import { Button } from 'templates/Button';
import * as service from './Services';

const Error = ({ t }) => {
	const history = useHistory();
	const onClick = () => history.push('/');
	return (
		<ServiceProvider value={service}>
			<Container>
				<Wrap>
					<div className='error-page'>
						<h1 className='error-page__title'>{t('Страница не найдена')}</h1>
						<Button name='replenish' onClick={onClick}>
							{t('Вернуться на главную')}
						</Button>
					</div>
				</Wrap>
			</Container>
		</ServiceProvider>
	);
};

const mapDispatchToProps = (dispatch) => ({
	onLoad: service.getActionStore('pageLoad')(dispatch),
});

export default compose(
	withTagDefaultProps(null, mapDispatchToProps),
	LoadPage
)(Error);
