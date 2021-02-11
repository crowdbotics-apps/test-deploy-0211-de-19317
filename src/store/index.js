import apiReducer from "./reducers";
import customReducer from "./custom/reducers"
import rootSaga from "./sagas";
import customRootSaga from "./custom/sagas"

import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import socialLoginSaga from '../features/SocialLogin-Frontend117458/auth/sagas';
import socialLoginReducer from '../features/SocialLogin-Frontend117458/auth/reducers';

const sagaMiddleware = createSagaMiddleware();

/**
 * this app uses React Native Debugger, but it works without it
 */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = [sagaMiddleware /** more middlewares if any goes here */];

const store = createStore(
  combineReducers({
      apiReducer: apiReducer,
      customReducer: customReducer,
      socialLogin: socialLoginReducer
  }),
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(rootSaga);
sagaMiddleware.run(customRootSaga);
sagaMiddleware.run(socialLoginSaga);

export { store };
