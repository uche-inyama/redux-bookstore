import React from "react";
import "./BooksList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Book from "../components/Book";
import { removeBook, handleFilter } from "../actions";
import CategoryFilter from "../components/CategoryFilter";

library.add(faUser);

const BooksList = ({ books, handleRemoveBook, state, handleFilterChange }) => (
  <div className='bookListWrapper'>
    <ul class='navigation'>
      <li className='logo'>
        <h1>Bookstore CMS</h1>
        <span>
          <li className='categories'>
            <span> </span>
            <CategoryFilter state={state} handleFilter={handleFilterChange} />
          </li>
        </span>
      </li>
      <li className='nav-icon'>
        <div></div>
        <div></div>
        <div></div>
      </li>
      <li className='books'>BOOKS</li>
      <li className='user'>
        <FontAwesomeIcon icon='user' />
      </li>
    </ul>

    <div>
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
    </div>
  </div>
);

BooksList.propTypes = {
  books: PropTypes.instanceOf(Array).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
  state: PropTypes.instanceOf(Object).isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};
/* eslint-disable */
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
    showCategories: false,
  };
};
/* eslint-enable */
const mapDispatchToProps = (dispatch) => ({
  handleRemoveBook: (book) => {
    dispatch(removeBook(book));
  },
  handleFilterChange: (filter, state) => {
    dispatch(handleFilter(filter, state));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
