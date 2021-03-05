import * as actionTypes from '../actions/index';

const defaultState = [
    { title: 'Harry Potter', category: 'Fiction', id: Math.random() },
    { title: 'How To Win Friends', category: 'Non Fiction', id: Math.random() },
    { title: 'The Prince', category: 'Non Fiction', id: Math.random() },
  ];

// const booksReducer = (state = defaultState, action) => {
//   switch (action.type) {
//     case actionTypes.CREATE_BOOK:
//       return {
//         ...state,
//         books: [...state.books, action.book],
//       };

//     case actionTypes.REMOVE_BOOK:
//       return {
//         ...state,
//         books: state.books.filter(book => book.id !== action.id),
//       };

//     default:
//       return state;
//   }
// };

const booksReducer = (state = defaultState, action) => {
  switch(action.type){
    case "CREATE_BOOK":
      return [...state, action.payload]
    case "REMOVE_BOOK":
      return state.filter(book => book.id !== action.payload)
    default:
      return state;
  }
}

export default booksReducer;
