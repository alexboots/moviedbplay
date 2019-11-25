import React from 'react'
import PropTypes from 'prop-types'
import { Search, Input, Clear, ClearWrapper } from './styles'

export const SearchBar = ({setValue, value, placeholder}) => {
  const handleChange = (event) => {
    setValue(event.target.value)
  }

  return (
    <Search>
      <Input value={value} onChange={handleChange} placeholder="placeholder" />
      <ClearWrapper>
        <Clear onClick={()=>{setValue('')}}>&#10006;</Clear>
      </ClearWrapper>
    </Search>
  )
}

SearchBar.propTypes = {
  setValue: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};