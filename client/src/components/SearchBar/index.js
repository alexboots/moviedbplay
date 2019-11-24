import React from 'react'
import PropTypes from 'prop-types';

export const SearchBar = ({onChange, value}) => {
  return <input value={value} onChange={onChange} />
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};