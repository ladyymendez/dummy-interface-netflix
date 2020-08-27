import React from 'react';
import Row from './components/row/Row';
import Banner from './components/banner/Banner';
import { requestMovies } from './shared';
import './App.css';

function App() {
  return (
    <div className="app">
      <Banner />
      <Row title="Netflix Originals"
        fetchURL={
          requestMovies.fetchNetflixOriginals
        }/>
    </div>
  );
}

export default App;
