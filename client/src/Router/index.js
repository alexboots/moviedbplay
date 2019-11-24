import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { Home } from 'Home'
import { MovieList } from 'MovieList'
import { MoviePage } from 'MoviePage'

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