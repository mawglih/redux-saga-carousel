import React from 'react';
import './arrow.css';

const Arrow = ({
  direction,
  click,
  arrowColor,
}) => (
  <div onClick={click} role="button">
    <button className="button" />
    <div className={direction} />
  </div>
);
export default Arrow;
