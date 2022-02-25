import { combineReducers } from "redux";
import AppReducer from "./AppReducer";
import PageReducer from "./PageReducer";
import { firebaseReducer } from 'react-redux-firebase'
import web3Reducer from "./Web3Reducer";

export default combineReducers({
    appState: AppReducer,
    pageState: PageReducer,
    web3: web3Reducer,
    firebase: firebaseReducer
});
