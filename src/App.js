import React from 'react';
import Row from './components/row/Row';
import Banner from './components/banner/Banner';
import Nav from './components/nav/Nav';
import { requestMovies } from './shared';
import './App.css';

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Netflix Originals"
        fetchURL={
          requestMovies.fetchNetflixOriginals
        }
        isLargeRow
        />
      <Row title="Trending Now"
      fetchURL={
        requestMovies.fetchTrending
      }/>
      <Row title="Action"
      fetchURL={
        requestMovies.fetchActionMovies
      }/>
      <Row title="Comedy"
      fetchURL={
        requestMovies.fetchComedyMovies
      }/>
    </div>
  );
}

export default App;
