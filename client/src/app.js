import React, { Suspense } from 'react'
import { Link } from 'react-router-dom'
import useSWR, { SWRConfig, trigger }from 'swr'
import ErrorBoundary from 'components/Error/Boundary'
import { Loader } from 'components/shared/Loader'
import { fetcher } from './utils/fetcher'

import { Router } from './Router'

export const App = () => {
  return(
    <ErrorBoundary>
      <SWRConfig
        value={{
          refreshInterval: 0,
          revalidateOnFocus: false,
          fetcher,
          suspense: true,
        }}
      >
        <Suspense fallback={<Loader />}>
          <Router>
            {/* <menu> */}
            {/*   <ul> */}
            {/*     <li> */}
            {/*       <Link to="/">Home</Link> */}
            {/*     </li> */}
            {/*     <li> */}
            {/*       <Link to="/movie/:slug">movie</Link> */}
            {/*     </li> */}
            {/*   </ul> */}
            {/* </menu> */}
          </Router>
          </Suspense>
      </SWRConfig>
    </ErrorBoundary>
  )
}

// const What = () => {
//   const { data, error } = useSWR('/api/movie/550')
//   console.log('data', data)

//   return (<div onClick={() => {trigger('/api/movie/550')}}>hi</div>)
// }

// const Popular = () => {
//   const { data, error, isValidating } = useSWR('/api/movie/popular')
//   console.log('data', data)
//   console.log('isValidating', isValidating)

//   return (<div>2hi</div>)
// }

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
