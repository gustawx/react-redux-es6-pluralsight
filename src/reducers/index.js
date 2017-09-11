import { combineReducers } from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  courses, //short hand property name - to samo co: courses: courses
  authors,
  ajaxCallsInProgress
});

export default rootReducer;
