import { ACTIVATE_STATE, DEACTIVATE_STATE } from '../types';

const initialState = {
  subComponentA1: {
    active: true
  },
  subComponentA2: {
    active: false
  },
  subComponentB1: {
    active: false
  },
  subComponentB2: {
    active: false
  }
};

export default function optionsReducer (state = initialState, action) {
  switch (action.type) {
    case ACTIVATE_STATE:
      return Object.assign({}, state, {
        [action.comp]: {
          active: true
        }
      });
    case DEACTIVATE_STATE:
      return Object.assign({}, state, {
        [action.comp]: {
          active: false
        }
      });
    default:
      return state;
  }
}
