import { applyMiddleware, compose, createStore } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../Reducers';
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import firebaseConfig from 'config';

const composeEnhancers =
	process.env.NODE_ENV === 'development' ? composeWithDevTools : () => {};

const store = createStore(
	reducer,
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
		reactReduxFirebase(firebaseConfig),
		reduxFirestore(firebaseConfig)
	)
);

export default store;
