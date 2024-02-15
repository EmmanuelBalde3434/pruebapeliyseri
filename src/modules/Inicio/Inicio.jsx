import React from 'react';
import { Link } from 'react-router-dom';
import data from '../../data/sample.json';
import './inicio.css';

function ImagenBoton({ imagen, ruta, titulo }) {
  return (
    <Link to={ruta} className="imagenBoton">
      <img src={imagen} alt={titulo} />
      <p>{titulo}</p>
    </Link>
  );
}


function Inicio() {

  const serieDestacada = data.entries.find(entry => entry.programType === 'series' && entry.title === 'Mad Dogs');
  const peliculaDestacada = data.entries.find(entry => entry.programType === 'movie' && entry.title === 'The Hunger Games: Catching Fire');

  return (
    <div className="fila">
      <div className="tit">
        <h2 className='titulo'>Títulos populares</h2>
      </div>
      <div className="contenido">
        {serieDestacada && <ImagenBoton imagen={serieDestacada.images['Poster Art'].url} ruta="/series" titulo="Series" />}
        {peliculaDestacada && <ImagenBoton imagen={peliculaDestacada.images['Poster Art'].url} ruta="/peliculas" titulo="Películas" />}
      </div>
    </div>
  );
}


export default Inicio;
