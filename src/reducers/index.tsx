import { combineReducers } from 'redux';
import { ADD_BUNDLE } from '../actions';

function bundles(state = [], action) {
  switch (action.type) {
  case ADD_BUNDLE:
    return [...state, {
      version: action.version
    }];
  default:
    return state;
  }
}

const otaApp = combineReducers({
  bundles
})

export default otaApp;
