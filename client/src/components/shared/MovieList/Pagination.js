import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from 'components/shared/theme'
import { NEXT_PAGE, PREV_PAGE } from 'components/shared/MovieList'

const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 18px;
`
const Button = styled.button`
  background: ${theme.space.alt};
  borderRadius: 30px;
  width: 150px;
  padding: 10px 20px;
  margin: auto;
  color: ${theme.text.reverse};
  border-radius: 30px;
  padding: 10px;
  outline: none;
  border: none;
  cursor: pointer;
  margin: 18px;
`
const PageNumber = styled.div`
  background: ${theme.brand.wash};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  width: 30px;
`

const Spacer = styled.div`
  width: 180px;
`

export const Pagination = ({ dispatch, totalPages, currentPage }) => (
  <PaginationWrap>
    { currentPage !== 1 ?
      <Button onClick={() => {dispatch({ type: PREV_PAGE })}}>{'<< Prev'}</Button> :
      <Spacer />
    }
    <PageNumber>{currentPage}</PageNumber>
    { currentPage !== totalPages ?
      <Button onClick={() => {dispatch({ type: NEXT_PAGE })}}>{'Next >>'}</Button> :
      <Spacer />
    }
  </PaginationWrap>
)

Pagination.propTypes = {
  dispatch: PropTypes.func.isRequired,
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
}