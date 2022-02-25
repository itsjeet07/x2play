// import request from 'services/Request';

const requestForgot = (data) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(console.log(data));
		}, 1500);
	});
};

export { requestForgot };
