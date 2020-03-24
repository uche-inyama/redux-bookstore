import React from 'react';

const Book = ({ title, category, id }) => (
  <>
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  </>
);

export default Book;
