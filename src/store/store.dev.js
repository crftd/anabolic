import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import DevTools from '../containers/devTools';
import reducers from '../reducers';

const reducer = combineReducers(reducers);

const logger = createLogger({
    level: 'info',
    collapsed: true
});

const enhancer = compose(
    applyMiddleware(thunk, logger),
    DevTools.instrument()
);

export default createStore(reducer, {}, enhancer);