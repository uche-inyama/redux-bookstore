import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import BooksList from './containers/BooksList';
import BooksForm from './containers/BooksForm';
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
