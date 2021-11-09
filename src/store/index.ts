import { applyMiddleware, createStore, combineReducers } from 'redux'
import thunk from 'redux-thunk'

import gameReducer from './game/reducer'

const reducer = combineReducers({
  game: gameReducer,
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store