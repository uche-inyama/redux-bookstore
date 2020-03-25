import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
    };
    this.handleTitle = this.handleTitle.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
  }

  handleTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  handleCategory() {
    this.setState({
      category: document.querySelector('select').value,
    });
  }

  render() {
    const { addBook } = this.props;

    const handleSubmit = e => {
      e.preventDefault();
      const params = { ...this.state, id: Math.random() };
      document.querySelector('input').value = '';
      this.setState({
        title: '',
      });
      if (params.title) addBook(params);
    };

    const categories = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
    ];
    return (
      <>
        <form>
          <input
            type="text"
            required
            placeholder="Add Your Book"
            onChange={this.handleTitle}
          />
          <select name="categories" onChange={this.handleCategory}>
            {categories.map(category => (
              <option key={Math.random()}>{category}</option>
            ))}
          </select>
          <input type="submit" value="Add Book" onClick={handleSubmit} />
        </form>
      </>
    );
  }
}

BooksForm.propTypes = {
  addBook: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  addBook: book => {
    dispatch(createBook(book));
  },
});

export default connect(null, mapDispatchToProps)(BooksForm);
