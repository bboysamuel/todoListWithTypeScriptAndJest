import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  App
} from './components';
import {
  BrowserRouter as Router,
} from 'react-router-dom'
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
      <App />
  </Router>,
  document.getElementById('root')
)

// measure performance in app, pass a function
// to log results (for example: reportWebVitals(console.log))
// reportWebVitals();

