import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = ({ state, handleRemoveBook }) => (
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
        {state.map((book, index) => (
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
  state: PropTypes.instanceOf(Array).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  state,
});
const mapDispatchToProps = dispatch => ({
  handleRemoveBook: book => {
    dispatch(removeBook(book));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
