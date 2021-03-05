import React from 'react';
import BooksList from './containers/BooksList.tsx';
import BooksForm from './containers/BooksForm.tsx';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
