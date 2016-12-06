import {
  createStore,
  applyMiddleware,
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from './reducer'

export default function configStore(initState) {
  const store = createStore(
    reducers,
    initState,
    applyMiddleware(thunkMiddleware, createLogger())
  )

  return store
}
