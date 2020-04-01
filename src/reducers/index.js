import { combineReducers } from 'redux';
import books from './books';
import filterReducer from './filter';

export default combineReducers({
  booksReducer: books,
  filterReducer,
});
