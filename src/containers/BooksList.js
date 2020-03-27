import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, handleFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  books, handleRemoveBook, state, handleFilterChange,
}) => (
  <div>
    <h1>Book Store</h1>
    <CategoryFilter state={state} handleFilter={handleFilterChange} />

    <table className="responsive-table highlight centered">
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map((book, index) => (
          <Book
            title={book.title}
            id={book.id}
            category={book.category}
            order={index + 1}
            key={book.id}
            handleRemoveBook={handleRemoveBook}
          />
        ))}
      </tbody>
    </table>
  </div>
);

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
  state: PropTypes.instanceOf(Object).isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};
/* estlint-disable */
const mapStateToProps = ({ filterReducer, booksReducer }) => {
  let books;
  if (filterReducer.books) {
    books = filterReducer.books;
  } else {
    books = booksReducer.books;
  }
  return {
    books,
    state: booksReducer,
  };
};
/* eslint-enable */
const mapDispatchToProps = dispatch => ({
  handleRemoveBook: book => {
    dispatch(removeBook(book));
  },
  handleFilterChange: (filter, state) => {
    dispatch(handleFilter(filter, state));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
