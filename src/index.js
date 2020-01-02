import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import thunk from 'redux-thunk'
import { applyMiddleware, compose, combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'

import productsReducer from './reducers/productsReducer'
import userReducer from './reducers/userReducer'

const allReducers = combineReducers({
	products: productsReducer,
	user: userReducer
})

const allStoreEnhancers = compose(
	applyMiddleware(thunk),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(
	allReducers,
	{
		products: [{name: 'iPhone'}],
		user: 'Michael'
	},
	allStoreEnhancers
);

console.log(store.getState())

ReactDOM.render(<Provider store={store}><App aRandomProps="whatever"/></Provider>, document.getElementById('root'));