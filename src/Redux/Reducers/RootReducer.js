import { combineReducers } from "redux";
import AuthReducer from './AuthReducer';
import Createreducer from './Createreducer';

let reducers = combineReducers({ AuthReducer, Createreducer });

export default reducers;