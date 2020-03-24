import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BooksList = ({ state }) => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {state.map(book => (
          <Book title={book.title} category={book.category} key={book.id} />
        ))}
      </tbody>
    </table>
  </div>
);

BooksList.propTypes = {
  state: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  state
});
const mapDispatchToProps = dispatch => ({
  deleteBook: book => {
    dispatch(removeBook(book));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
