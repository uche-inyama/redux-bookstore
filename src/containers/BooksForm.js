import React from "react";
import PropTypes from "prop-types";
import "./BooksForm.css";
import { connect } from "react-redux";
import { createBook } from "../actions/index";

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: "Action",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    if (e.target.tagName === "INPUT") {
      this.setState({
        title: e.target.value,
      });
    }
    if (e.target.tagName === "SELECT") {
      this.setState({
        category: e.target.value,
      });
    }
  }

  render() {
    const { addBook } = this.props;
    const { title, category } = this.state;
    const handleSubmit = (e) => {
      e.preventDefault();
      const params = { ...this.state, id: Math.random() };
      document.querySelector("input").value = "";
      this.setState({
        title: "",
      });
      if (params.title) addBook(params);
    };

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
          {/* <h2 className="title">ADD NEW BOOK</h2> */}
          <input
            type='text'
            required
            placeholder='Add Your Book'
            className='addBookInput'
            onChange={this.handleChange}
            value={title}
          />
          <select
            name='categories'
            className='selectCategory'
            onChange={this.handleChange}
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
    );
  }
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
