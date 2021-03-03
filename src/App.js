import React from 'react';
import BooksList from './containers/BooksList';
import BooksForm from './containers/BooksForm.tsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
