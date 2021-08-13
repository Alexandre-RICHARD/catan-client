import { createStore, applyMiddleware, compose } from 'redux';
import reducer from 'src/reducers';
import mainMiddleware from 'src/middlewares/mainMiddleware';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(
    mainMiddleware,
  ),
);

const store = createStore(
  reducer,
  enhancers,
);

export default store;
