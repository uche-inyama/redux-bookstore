import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, handleFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter'

const BooksList = ({ books, handleRemoveBook, handleFilter }) => (
  <div>
    <h1>Book Store</h1>
    <table>
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
    <CategoryFilter handleFilter={handleFilter} />

  </div>
);

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  books: state.books
});
const mapDispatchToProps = dispatch => ({
  handleRemoveBook: book => {
    dispatch(removeBook(book));
  },
  handleFilterChange: filter => {
    dispatch(handleFilter(filter))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
