import { useLocation, Link } from 'react-router-dom';
import style from './MovieList.module.css';
import PropTypes from 'prop-types';

const MovieList = ({ films }) => {
  const location = useLocation();

  return (
    <ul className={style.list}>
      {films.map(film => (
        <li className={style.item} key={film.id}>
          <Link
            className={style.movieLink}
            to={`/movies/${film.id}`}
            state={{ from: location }}
          >
            {film.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

MovieList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};

export default MovieList;
