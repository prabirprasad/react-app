import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import ContactUs from './pages/contactUs';
import Login from './pages/login';


function App() {
  return (
    <>
      <Route exact path="/" component={Home}/>
      <Route exact path="/contactUs" component={ContactUs}/>
      <Route exact path="/login" component={Login}/>
    </>
  );
}

export default App;
