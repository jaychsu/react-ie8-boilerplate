import { routerReducer } from 'react-router-redux'
import { combineReducers } from 'redux'

const reducers = combineReducers({
  routing: routerReducer,
})

export default reducers
