import React, {useState, useEffect} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Private from './components/home/Private';


import NotFound from './components/404/NotFound.js';
import Login from './components/home/Login';
import Navbar from './components/home/Navbar';



const Router = () => (
  
  <BrowserRouter>
    <Switch>
      
      <Route exact path="/" component={Home} />
      <Route exact path="/private" component={Private}/>
      <Route exact path="/login" component={Login}/>

      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
