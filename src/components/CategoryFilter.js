import React from 'react';
import PropTypes from 'prop-types';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectValue: 'All',
    };
  }

  render() {
    const { handleFilter, state } = this.props;
    const { selectValue } = this.state;
    const categories = [
      'Action',
      'Biography',
      'History',
      'Horror',
      'Kids',
      'Learning',
      'Sci-Fi',
      'Fiction',
      'Non Fiction',
      'All',
    ];

    const handleSelect = e => {
      this.setState({
        selectValue: e.target.value,
      });
      handleFilter(e.target.value, state);
    };
    return (
      <>
        <select name="categories" onChange={handleSelect} value={selectValue}>
          {categories.map(category => (
            <option key={Math.random()} value={category}>
              {category}
            </option>
          ))}
        </select>
      </>
    );
  }
}

CategoryFilter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  state: PropTypes.instanceOf(Object).isRequired,
};
export default CategoryFilter;
