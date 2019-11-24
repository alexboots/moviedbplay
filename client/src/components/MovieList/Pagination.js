import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import theme from 'theme'
import { NEXT_PAGE, PREV_PAGE } from 'components/MovieList'

const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 18px;
`
const Button = styled.button`
  cursor: pointer;
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
  width: 80px;
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