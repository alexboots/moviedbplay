import React, { useEffect, useReducer } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory,
} from "react-router-dom"

import useSWR, { SWRConfig, trigger }from 'swr'
import { fetcher } from './fetcher'

import { Home } from './Home'
import { MovieList } from './MovieList'
import { MoviePage } from './MoviePage'

export const App = () => {
  return(
    <SWRConfig
      value={{
        refreshInterval: 0,
        revalidateOnFocus: false,
        fetcher,
      }}
    >
      <div style={{background: 'pink'}}>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/movie/:slug">movie</Link>
              </li>
            </ul>

            <hr />

            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/movie/:slug">
                <MoviePage />
              </Route>
            </Switch>

          </div>
        </Router>
      </div>
    </SWRConfig>
  )
}

// const What = () => {
//   const { data, error } = useSWR('/api/movie/550')
//   console.log('data', data)
// 
//   return (<div onClick={() => {trigger('/api/movie/550')}}>hi</div>)
// }
// 
// const Popular = () => {
//   const { data, error, isValidating } = useSWR('/api/movie/popular')
//   console.log('data', data)
//   console.log('isValidating', isValidating)
// 
//   return (<div>2hi</div>)
// }
// 
// function App() {
//   return (
//     <SWRConfig
//       value={{
//         refreshInterval: 0,
//         revalidateOnFocus: false,
//         fetcher,
//       }}
//     >
//       <div className="App">
//         <What />
//         <Popular />
// 
//         <header className="App-header">
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     </SWRConfig>
//   )
// }
// 
// export default App
