import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"
import { Loader } from 'components/shared/Loader'
import { ScrollTop } from 'Router/ScrollTop'

const Home = lazy(() => import('components/Home'))
const MoviePage = lazy(() => import('../components/MoviePage'))

export const Router = ({children}) => (
  <BrowserRouter>
    {children}
    <ScrollTop />
    <Switch>
      <Suspense fallback={<Loader />}>
        <Route exact path="/" component={Home} />
        <Route path="/movie/:movieId" component={MoviePage} />
      </Suspense>
    </Switch>

  </BrowserRouter>
);