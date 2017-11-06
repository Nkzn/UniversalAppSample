import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

const createStoreWithMiddleware = compose(
  applyMiddleware(
    thunk
  )
)(createStore);

export default function configureStore(rootReducer: any, initialState?: any) {
  return createStoreWithMiddleware(rootReducer, initialState);
}