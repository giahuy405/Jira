import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { rootSaga } from './sagas/rootSaga'
import createSagaMiddleware from "redux-saga";
import { reducer } from './reducers/reducer'
import { projectReducer } from './reducers/projectReducer'
import { taskReducer } from "./reducers/taskReduce";
import { priorityReducer } from "./reducers/priorityReducer";
import { userReducer } from "./reducers/usersReducer";
import { statusReducer } from "./reducers/statusReducer";



const middlewareSaga = createSagaMiddleware()
const rootReducer = combineReducers({
    reducer,
    projectReducer,
    taskReducer,
    priorityReducer,
    userReducer,
    statusReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(middlewareSaga)))
middlewareSaga.run(rootSaga)

export default store;