import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import keys from './Utils/keys.json';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

console.log(keys.API_KEY);
console.log(keys.API_USER);
console.log(keys.API_PASS);
