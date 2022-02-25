// import request from 'services/Request';

const requestRegister = (data) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(console.log(data));
		}, 1500);
	});
};

export { requestRegister };
