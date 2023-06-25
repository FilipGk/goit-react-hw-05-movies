import React, { useEffect, useState } from 'react';
import MovieList from 'pages/MovieList/MovieList';
import { fetchTrending } from 'services/Services';
import Loader from 'components/Loader/Loader';

const Home = () => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTrendingFilms = () => {
      setLoading(true);

      fetchTrending()
        .then(trendingFilms => {
          setFilms(trendingFilms);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchTrendingFilms();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      <MovieList films={films} />

      {loading && <Loader />}
    </main>
  );
};

export default Home;
