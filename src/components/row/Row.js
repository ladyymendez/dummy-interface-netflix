import React, {useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Youtube from 'react-youtube';
import movieTrailer from 'movie-trailer';

import { url } from '../../shared';
import './Row.css';

const baseUrl = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    async function fetchData() {
      const request = await url.get(fetchURL);
      setMovies(request.data.results)
      return request;
    }
    fetchData();
  }, [fetchURL]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay:1
    }
  };

  const handleClick = (movie) => {
    if(trailerUrl) {
      setTrailerUrl("")
    } else {
      movieTrailer(movie?.name || "")
        .then((urlmovie) => {
          const urlParams = new URLSearchParams(new URL(urlmovie).search);
          setTrailerUrl(urlParams.get('v'));
        })
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {
        movies.map((movie) => (
          <img role="presentation" className="row_poster"
            key={movie.id}
            onClick={() => handleClick(movie)}
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
      {trailerUrl && <Youtube videoId={trailerUrl} opts={opts}/>}
    </div>
  );
}

Row.propTypes = {
  title: PropTypes.string.isRequired,
  fetchURL: PropTypes.string.isRequired
};


export default Row;
