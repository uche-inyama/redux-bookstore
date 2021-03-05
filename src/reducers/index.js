import { combineReducers } from 'redux';
// import books from './books';
import booksReducer from './books'
import filterReducer from './filter';

export default combineReducers({
  // booksReducer: books,
  booksReducer,
  filterReducer,
});
