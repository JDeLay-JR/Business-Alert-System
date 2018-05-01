import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

//Import all reducers from reducer files
import clients from './clients'
import user from './user'

//Combine all the reducers
const reducer = combineReducers({clients, user})
const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
))
const store = createStore(reducer, middleware)

//Export all thunks from each reducer file
export default store
export * from './clients'
export * from './text'
export * from './user'
