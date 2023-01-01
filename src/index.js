import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import { App } from './app.jsx'


const rootBlock = document.getElementById('root')
const root = ReactDOM.createRoot(rootBlock)
  root.render( <App /> )
