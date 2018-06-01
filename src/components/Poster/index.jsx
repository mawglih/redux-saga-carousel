import React from 'react';
import POSTER_URL from '../utils/PosterUrl'
import './poster.css';

const Poster = ({
  index,
  }) => (
    <div className="poster">
      <img src={POSTER_URL[index]} alt="poster" />
    </div>
);
export default Poster;
