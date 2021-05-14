import { combineReducers } from 'redux';
import { languageReducer } from './reducers/chooseLanguageReducer';

const rootReducer = combineReducers({
  language: languageReducer,
});

export default rootReducer;
