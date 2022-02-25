import { Auth } from 'services/Agent';

// const requestSignIn = (data) => Auth.login(data);
const requestSignIn = (data) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(console.log(data));
		}, 1500);
	});
};

export { requestSignIn };
