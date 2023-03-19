import { combineReducers, createStore, applyMiddleware } from "redux";
import { rootSaga } from './sagas/rootSaga'
import createSagaMiddleware from "redux-saga";
import {reducer} from './reducers/reducer'

const middlewareSaga = createSagaMiddleware()
const rootReducer = combineReducers({
    reducer
})

const store = createStore(rootReducer, applyMiddleware(middlewareSaga))
middlewareSaga.run(rootSaga)

export default store;