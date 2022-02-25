import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

let config = {
	apiKey: 'AIzaSyCXvSsgj1mBGQvXxxLe9hzskW84Tmt-Tho',
	authDomain: 'cco-app-e743b.firebaseapp.com',
	projectId: 'cco-app-e743b',
	storageBucket: 'cco-app-e743b.appspot.com',
	messagingSenderId: '366909736987',
	appId: '1:366909736987:web:fe6057f2d32994fb0a90be',
	measurementId: 'G-V1NKJZF6ZY',
};

firebase.initializeApp(config);

export default firebase;
