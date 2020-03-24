import * as actionTypes from '../actions/index';

const defaultState = [
  { title: 'Harry Potter', category: 'Fiction', id: Math.random() },
  { title: 'How To Win Friends', category: 'Non Fiction', id: Math.random() },
  { title: 'The Prince', category: 'Non Fiction', id: Math.random() },
];

const booksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_BOOK:
      action.book.id = Math.random();
      return [...state, action.book];
    case actionTypes.REMOVE_BOOK:
      return state.filter((el, index) => index !== action.book.id);
    default:
      return state;
  }
};

export default booksReducer;
