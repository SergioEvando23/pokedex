import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App}/>
    </Switch>  
  </BrowserRouter>,
  document.getElementById('root')
);

