import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { rootReducer } from './reducers/rootReducer';

import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;