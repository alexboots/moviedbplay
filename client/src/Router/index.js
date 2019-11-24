import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { Home } from 'components/Home'
import { MovieList } from 'components/MovieList'
import { MoviePage } from 'components/MoviePage'
import { ScrollTop } from 'Router/ScrollTop'

export const Router = ({children}) => (
  <BrowserRouter>
    {children}
    <ScrollTop />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/movie/:movieId">
        <MoviePage />
      </Route>
    </Switch>

  </BrowserRouter>
);