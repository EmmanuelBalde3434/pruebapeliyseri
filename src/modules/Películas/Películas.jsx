import React, { useEffect, useState } from 'react';
import data from '../../data/sample.json';
import './peliculas.css';

function Películas() {
  const [movies, setMovies] = useState([]);
  const [year, setYear] = useState(2010);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    try {
      const filteredMovies = data.entries.filter(entry => entry.programType === 'movie' && entry.releaseYear >= year);
      const sortedMovies = filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
      const selectedMovies = sortedMovies.slice(0, 20);
      setMovies(selectedMovies);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, [year]);
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container">
      <div className="tit">
        <h2 className='titulo'>Películas</h2>
      </div>
      <div className="filter-container">
        <label htmlFor="year">Año: </label>
        <input type="number" id="year" value={year} onChange={handleYearChange} />
      </div>
      <div className="movie-container">
        {movies.map((movie, index) => (
          <div key={index} className="movie-item">
            <img src={movie.images['Poster Art'].url} alt={movie.title} />
            <h2>{movie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Películas;
