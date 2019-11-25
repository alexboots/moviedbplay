import React from 'react'
import { Link } from 'react-router-dom'
import useSWR, { SWRConfig, trigger }from 'swr'
import ErrorBoundary from 'components/Error/Boundary'
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
        <Router />
      </SWRConfig>
    </ErrorBoundary>
  )
}
