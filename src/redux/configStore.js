import { combineReducers, createStore, applyMiddleware,compose } from "redux";
import { rootSaga } from './sagas/rootSaga'
import createSagaMiddleware from "redux-saga";
import {reducer} from './reducers/reducer'
import {projectReducer} from './reducers/projectReducer'
<<<<<<< HEAD
import { taskReducer } from "./reducers/taskReduce";
import { priorityReducer } from "./reducers/priorityReducer";
import { userReducer } from "./reducers/usersReducer";
import { statusReducer } from "./reducers/statusReducer";
=======
import {userReducer} from './reducers/userReducer'
>>>>>>> 10c99c16da8952ba2110b21f673382ea41b94ce7

const middlewareSaga = createSagaMiddleware()
const rootReducer = combineReducers({
    reducer,
    projectReducer,
<<<<<<< HEAD
    taskReducer,
    priorityReducer,
    userReducer,
    statusReducer,
    
=======
    userReducer,
>>>>>>> 10c99c16da8952ba2110b21f673382ea41b94ce7
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer,composeEnhancers( applyMiddleware(middlewareSaga)))
middlewareSaga.run(rootSaga)

export default store;