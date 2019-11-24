import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { Home } from 'components/Home'
import { MovieList } from 'components/MovieList'
import { MoviePage } from 'components/MoviePage'

export const Router = ({children}) => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/movie/:slug">
        <MoviePage />
      </Route>
    </Switch>

    {children}

  </BrowserRouter>
);