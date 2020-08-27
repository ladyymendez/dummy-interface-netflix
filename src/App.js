import React from 'react';
import Row from './components/Row';
import { requestMovies } from './shared';

function App() {
  return (
    <div className="App">
      <Row title="Netflix Originals"
        fetchURL={
          requestMovies.fetchNetflixOriginals
        }/>
    </div>
  );
}

export default App;
