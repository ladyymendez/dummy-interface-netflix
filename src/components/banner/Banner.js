import React, {useEffect, useState} from 'react';
import { url, requestMovies } from '../../shared';
import './Banner.css';

function Banner() {
  const [movie, setMovies] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const request = await url.get(requestMovies.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random()*request.data.results.length-1)
        ]
      )
      return request;
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? `${str.substr(0, n-1)  }...` : str;
  }

  return (
    <header className="banner" style={{
      backgroundSize:"cover",
      // eslint-disable-next-line camelcase
      backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      backgroundPosition: 'center center'
    }}>
    <div className="banner_contents">
      <h1 className="banner_title">{movie?.title || movie?.name}</h1>
      <div className="banner_buttons">
        <button className="banner_button">Play</button>
        <button className="banner_button">My list</button>
      </div>
      <div className="banner_description">
        {truncate(movie?.overview,180)}
      </div>
    </div>
    <div className="banner-fadeBottom"/>
    </header>
  );
}

export default Banner;