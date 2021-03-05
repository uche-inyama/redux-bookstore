import React from "react";
import "./BooksList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Book from "../components/Book";
import { REMOVE_BOOK, CHANGE_FILTER } from "../actions";
import CategoryFilter from "../components/CategoryFilter";

library.add(faUser);


interface ArrayProps {
  title: string;
  category: string;
  id: number;
}

interface Props {
  books: ArrayProps[]
  filter: string;
  handleRemoveBook: (id: number) => void;
  handleFilterChange: (filter: any) => void;
}


const BooksList: React.FC <Props> = ({ books, handleRemoveBook, filter, handleFilterChange }) => {
  const bookFilter = (filter: string) => {
    if (filter === 'All'){
      return books
    }
    return books.filter(({category}) => category === filter)
  }
  const filteredBooks = bookFilter(filter)
  return (
    <div className='bookListWrapper'>
    <ul className='navigation'>
      <li className='logo'>
        <h1>Bookstore CMS</h1>
        <span>
          <div className='categories'>
            <span> </span>
            <CategoryFilter handleFilter={handleFilterChange} />
          </div>
        </span>
      </li>
      <li className='nav-icon'>
        <div></div>
        <div></div>
        <div></div>
      </li>
      <li className='books'>BOOKS</li>
      <li className='user'>
        <FontAwesomeIcon icon='user' />
      </li>
    </ul>

    <div>
      {filteredBooks.map((book: any) => (
        <Book
          title={book.title}
          id={book.id}
          category={book.category}
          // order={index + 1}
          key={book.id}
          handleRemoveBook={handleRemoveBook}
        />
      ))}
    </div>
  </div>
  )
};

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state: any) => ({
  books: state.booksReducer,
  filter: state.filterReducer
})

const mapDispatchToProps = (dispatch: any) => ({
  handleRemoveBook: (book: any) => {
    dispatch(REMOVE_BOOK(book));
  },
  handleFilterChange: (filter: any) => {
    dispatch(CHANGE_FILTER(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
