import React from 'react';
import Styles from './Filters.module.css';

const Filters = ({ name, options, handleChange, state }) => {
  return (
      <select name={name} onChange={handleChange} value={state || ""}>
        <option value="" disabled hidden>{name}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
  );
};

export default Filters;