import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  title, category, handleRemoveBook, order, id,
}) => (
  <>
    <tr>
      <td>{order}</td>
      <td>{title}</td>
      <td>{category}</td>
      <td><button type="button" onClick={() => handleRemoveBook(id)}>Remove</button></td>
    </tr>
  </>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  order: PropTypes.number.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};
export default Book;
