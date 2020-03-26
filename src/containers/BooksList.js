import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = ({ books }) => (
  <div>
    <h1>Book Store</h1>
    <table className="centered highlight">
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
            category={book.category}
            id={index + 1}
            key={book.id}
          />
        ))}
      </tbody>
    </table>
  </div>
);

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
});
const mapDispatchToProps = dispatch => ({
  deleteBook: book => {
    dispatch(removeBook(book));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
