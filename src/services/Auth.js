import { setLocalStorage, getLocalStorage } from 'services';
import firebase from 'config';

class Auth {
	key = '_xToken';
	token = '';

	setToken(token) {
		setLocalStorage(this.key, token);
	}

	getToken = () => this.token;

	signIn(res) {
		this.setToken(res.token);
	}

	isAuth() {
		return !!getLocalStorage(this.key);
	}

	clearToken() {
		localStorage.removeItem(this.key);
	}

	logout() {
		this.clearToken();
		firebase.auth().signOut();
	}
}

export default Auth;
