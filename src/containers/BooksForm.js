import React from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions/index';
class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action'
    };
    this.handleTitle = this.handleTitle.bind(this);
    this.handleCategory = this.handleCategory.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  categories = [
    'Action',
    'Biography',
    'History',
    'Horror',
    'Kids',
    'Learning',
    'Sci-Fi'
  ];

  handleTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  handleCategory(e) {
    this.setState({
      category: document.querySelector('select').value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addBook(this.state);
  }
  render() {
    return (
      <>
        <form>
          <input
            type='text'
            placeholder='Add Your Book'
            onChange={this.handleTitle}
          />
          <select name='categories' onChange={this.handleCategory}>
            {this.categories.map((category, index) => (
              <option key={index}>{category}</option>
            ))}
          </select>
          <input type='submit' value='Submit' onClick={this.handleSubmit} />
        </form>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBook: book => {
      dispatch(createBook(book));
    }
  };
};

export default connect(null, mapDispatchToProps)(BooksForm);
