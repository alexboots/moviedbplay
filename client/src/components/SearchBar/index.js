import React from 'react'
import PropTypes from 'prop-types';

export const SearchBar = ({setValue, value}) => {
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  return <input value={value} onChange={handleChange} />
}

SearchBar.propTypes = {
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};