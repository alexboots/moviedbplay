import React, { useEffect } from 'react';
import axios from 'axios';
import useSWR, { SWRConfig, trigger }from 'swr'
import logo from './logo.svg';
import './App.css';

const fetcher = (...args) => {
  return fetch(...args, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
}

const What = () => {
  const { data, error } = useSWR('/api/movie/550')
  console.log('data', data);

  return (<div onClick={() => {trigger('/api/movie/550')}}>hi</div>)
}

const Popular = () => {
  const { data, error, isValidating } = useSWR('/api/movie/popular')
  console.log('data', data);
  console.log('isValidating', isValidating);

  return (<div>2hi</div>)
}

function App() {
  return (
    <SWRConfig
      value={{
        refreshInterval: 0,
        revalidateOnFocus: false,
        fetcher,
      }}
    >
      <div className="App">
        <What />
        <Popular />

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </SWRConfig>
  );
}

export default App;
