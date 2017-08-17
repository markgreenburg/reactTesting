import { combineReducers } from 'redux';
import commentReducer from './comment_reducer';

const rootReducer = combineReducers({
  comments: commentReducer,
});

export default rootReducer;
