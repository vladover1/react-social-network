import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import state from "./redux/state";

// let {posts, dialogs, messages} = state

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App state={state} />
      </BrowserRouter>
  </React.StrictMode>
);


