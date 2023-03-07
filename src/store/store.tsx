import {applyMiddleware, createStore} from 'redux'
import createSagaMiddleWare from 'redux-saga'
import rootReducer from './redux/rootReducer'
import rootSaga from './saga/saga'

const sagaMiddleWare = createSagaMiddleWare()

const middleWare = [sagaMiddleWare]

const store = createStore(rootReducer, applyMiddleware(...middleWare))

sagaMiddleWare.run(rootSaga)

export default store