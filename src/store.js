import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import currentUser from './reducers/currentUser.js'
import recipes from './reducers/recipes.js'

const reducer = combineReducers({
    currentUser,
    recipes
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store