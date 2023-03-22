import { combineReducers, createStore, applyMiddleware,compose } from "redux";
import { rootSaga } from './sagas/rootSaga'
import createSagaMiddleware from "redux-saga";
import {reducer} from './reducers/reducer'
import {projectReducer} from './reducers/projectReducer'

const middlewareSaga = createSagaMiddleware()
const rootReducer = combineReducers({
    reducer,
    projectReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers( applyMiddleware(middlewareSaga)))
middlewareSaga.run(rootSaga)

export default store;