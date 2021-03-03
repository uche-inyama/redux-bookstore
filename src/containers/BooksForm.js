import React, { useState } from "react";
import PropTypes from "prop-types";
import "./BooksForm.css";
import { connect } from "react-redux";
import { createBook } from "../actions/index";

export const BooksForm = (props) => {
  const [bookProperties, setBookProperties] = useState({
    title: "",
    category: "Action"
  })

    const { addBook } = props;
    const { title, category } = bookProperties;

    const handleSubmit = (e) => {
      e.preventDefault();
      const params = {...bookProperties, id: Math.random() };
      if (params.title) addBook(params);
      setBookProperties({title: ''})
    };

    const handleChange = (e) => {
      const { value, name } = e.target
      setBookProperties({
        ...bookProperties,
        [name]: value
      })
    } 

    const categories = [
      "Action",
      "Biography",
      "History",
      "Horror",
      "Kids",
      "Learning",
      "Sci-Fi",
    ];

  return (
    <div className='BooksForm'>
    <form>
      <input
        type='text'
        name='title'
        required
        placeholder='Add Your Book'
        className='addBookInput'
        onChange={handleChange}
        value={title}
      />
      <select
        name='category'
        className='selectCategory'
        onChange={handleChange}
        value={category}
      >
        {categories.map((category) => (
          <option key={Math.random()} value={category}>
            {category}
          </option>
        ))}
      </select>
      <input
        type='submit'
        value='ADD BOOK'
        className='addBookButton'
        onClick={handleSubmit}
      />
    </form>
  </div>
  )
}


BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  addBook: (book) => {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
