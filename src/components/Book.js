import React from "react";
import PropTypes from "prop-types";
import "./Book.css";

const Book = ({ title, category, handleRemoveBook, id }) => (
  <>
    <ul className='Book'>
      <li className='bookCategory'>{category}</li>
      <li className='bookTitle'>{title}</li>
      <li>
        <button
          type='button'
          className='removeBook'
          onClick={() => handleRemoveBook(id)}
        >
          REMOVE BOOK
        </button>
      </li>
    </ul>
  </>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};
export default Book;
