import { request, auth } from 'services';

const tokenPlugin = (options) => {
	if (auth.isAuth()) {
		options.headers = options.headers || [];
		options.headers.push({
			name: 'Authorization',
			value: `BEARER ${auth.getToken()}`,
		});
	}
	return options;
};

const requestSend =
	(method) =>
	(url, data, options = {}) =>
		request.sendRequest({
			...tokenPlugin(options),
			data,
			url: `/api/${url}`,
			method,
		});

export const get = requestSend('get');
export const post = requestSend('post');
export const _delete = requestSend('delete');
export const put = requestSend('put');

export default {
	get,
	post,
	delete: _delete,
	put,
};
