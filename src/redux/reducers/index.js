import { combineReducers } from 'redux';

import components from './componentsReducer';

const rootReducer = combineReducers({
  components
});

export default rootReducer;
