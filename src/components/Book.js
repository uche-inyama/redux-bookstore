import React from "react";
import PropTypes from "prop-types";
import "./Book.css";

const Book = ({ title, category, handleRemoveBook, id }) => (
  <>
    <tr className="Book">
      <td className="bookCategory">{category}</td>
      <td className="bookTitle">{title}</td>
      <td>
        <button
          type="button"
          className="removeBook"
          onClick={() => handleRemoveBook(id)}
        >
          REMOVE BOOK
        </button>
      </td>
    </tr>
  </>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  handleRemoveBook: PropTypes.func.isRequired
};
export default Book;
