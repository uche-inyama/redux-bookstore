import React from 'react';
import BooksList from './containers/BooksList';
import BooksForm from './containers/BooksForm';
import './App.css';

function App() {
  return (
    <div>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
