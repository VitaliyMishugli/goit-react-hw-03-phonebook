import React from "react";
import PropTypes from 'prop-types';

export const Filter = ({ value, onChange }) => {
  return (
    <>
      <p> Find contacts by name</p>
      <input type="text" value={value} onChange={onChange} />
    </>
  )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired  
}