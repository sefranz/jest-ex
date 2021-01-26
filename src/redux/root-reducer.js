import { combineReducers } from 'redux';

import testReducer from './test-reducer';

const appReducer = combineReducers({
  test: testReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
