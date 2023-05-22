import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { filmsDataMocks } from './mocks/films_mocks';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App filmsData={filmsDataMocks}/>
  </React.StrictMode>,
);
