import {
  createStore,
  applyMiddleware,
} from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from './reducer'

const activeMiddlewares = [
  thunkMiddleware,
  process.env.DEBUG && createLogger(),
].filter(Boolean)

export default function configStore(initState) {
  const store = createStore(
    reducers,
    initState,
    applyMiddleware(...activeMiddlewares)
  )

  return store
}
