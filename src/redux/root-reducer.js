import { combineReducers } from 'redux';

import testReducer from './test-reducer';

const appReducer = combineReducers({
  test: testReducer.reducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
