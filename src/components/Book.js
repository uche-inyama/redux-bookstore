import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ title, category, id }) => (
  <>
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  </>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default Book;
