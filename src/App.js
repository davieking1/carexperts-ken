import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import logo from './logo1.png';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        <Switch>
        	<Route exact path="/" component={ProductList} />
        	<Route path="/details" component={Details} />
        	<Route path="/cart" component={Cart} />
        	<Route Component={Default} />
        </Switch>
      </React.Fragment>
      );
  }
}

export default App;