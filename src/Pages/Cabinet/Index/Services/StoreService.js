import { PageActions } from '../Actions';
import { getStoreItem } from 'services';

export const getActionStore = (action) => {
	const actions = {
		...PageActions,
	};

	return actions[action] || (() => {});
};

export default (stage, key, def) => getStoreItem(stage, key, def);
