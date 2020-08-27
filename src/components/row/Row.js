import React, {useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { url } from '../../shared';
import './Row.css';

const baseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await url.get(fetchURL);
      setMovies(request.data.results)
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {
        movies.map((movie) => (
          <img className="row_poster"
            key={movie.id}
            src={
              `${baseUrl}${
                movie.poster_path
              }`
            }
            alt={
              movie.name
            }/>
        ))
        }
      </div>
    </div>
  );
}

Row.propTypes = {
  title: PropTypes.string.isRequired,
  fetchURL: PropTypes.string.isRequired
};


export default Row;
