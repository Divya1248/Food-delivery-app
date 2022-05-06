import reducers from "../Reducers/RootReducer";
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import  thunk from 'redux-thunk';

let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))

export default store;