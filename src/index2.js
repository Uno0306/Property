import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './Form';
import reportWebVitals from './reportWebVitals';

console.log("form Render 실행 전");
ReactDOM.render(
  <React.StrictMode>
    <Form />
  </React.StrictMode>,
  document.getElementById('root')
);
 console.log("form실행");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
