import React, { useEffect, useState } from 'react';
import data from '../../data/sample.json';
import './series.css';

function Series() {
  const [series, setSeries] = useState([]);
  const [year, setYear] = useState(2010);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const filteredSeries = data.entries.filter(entry => entry.programType === 'series' && entry.releaseYear >= year);
      const sortedSeries = filteredSeries.sort((a, b) => a.title.localeCompare(b.title));
      const selectedSeries = sortedSeries.slice(0, 20);
      setSeries(selectedSeries);
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
        <h2 className='titulo'>Series</h2>
      </div>
      <div className="filter-container">
        <label htmlFor="year">Año: </label>
        <input type="number" id="year" value={year} onChange={handleYearChange} />
      </div>
      <div className="series-container">
        {series.map((serie, index) => (
          <div key={index} className="series-item">
            <img src={serie.images['Poster Art'].url} alt={serie.title} />
            <h2>{serie.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Series;
