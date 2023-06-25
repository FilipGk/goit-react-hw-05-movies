import { useState } from 'react';
import PropTypes from 'prop-types';
import style from './Form.module.css';

const Form = ({ searchMovies }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    searchMovies(query.toLowerCase());
  };

  return (
    <form className={style.searchForm} onSubmit={handleSubmit}>
      <input
        className={style.input}
        type="text"
        name="query"
        autoFocus
        value={query}
        onChange={handleInputChange}
      />
      <button className={style.button} type="submit">
        Search
      </button>
    </form>
  );
};

Form.propTypes = {
  searchMovies: PropTypes.func.isRequired,
};

export default Form;
