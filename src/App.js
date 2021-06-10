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
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Route path='/' component={Header} />
          <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/join' component={JoinPage} />
          </Switch>
          <Route path='/' component={Footer} />
        </Router>
      </div>
    );
  }

};


export default App;