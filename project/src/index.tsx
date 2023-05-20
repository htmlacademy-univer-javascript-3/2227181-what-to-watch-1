import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { filmesDataMocks } from './mocks/filmes_mocks';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App filmesData={filmesDataMocks}/>
  </React.StrictMode>,
);
