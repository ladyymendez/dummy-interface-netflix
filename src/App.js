import React from 'react';
import Row from './components/Row';
import { requestMovies } from './shared';
import './App.css';

function App() {
  return (
    <div className="app">
      <Row title="Netflix Originals"
        fetchURL={
          requestMovies.fetchNetflixOriginals
        }/>
    </div>
  );
}

export default App;
