// eslint-disable jsx-a11y 접근성 오류검사 회피 주석
/* eslint-disable jsx-a11y/anchor-is-valid  */

import './App.css';
import React, {Component} from 'react';
// import $ from 'jquery'
// import jso from "./bank.json";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/Header';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import JoinPage from './pages/JoinPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path='/' component={Header} />
          <Switch>
            <Route path='/' component={MainPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/join' component={JoinPage} />
          </Switch>
        </Router>
  
        <a href='./pages/LoginPage'>로그인</a>
        <a href='/login'>로그인</a>
        <a href="join">회원가입</a>
      </div>
    );
  }

};


export default App;