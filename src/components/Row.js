import React, {useEffect, useState } from 'react';
import { url } from '../shared';

function Row({title, fetchURL}) {
  const [movie, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await url.get(fetchURL);
      setMovies(request.data.results)
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div>
       <h2>{title}</h2>
    </div>
  );
}

export default Row;
