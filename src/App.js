import React, { Component } from 'react';
import  {Switch,Route,withRouter, BrowserRouter} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import Details from './component/Details';
import Cart from './component/Cart';
import Default from './component/Defaul';
import  Modal  from './component/Modal';

class App extends Component {
  render(){
    return(
      <BrowserRouter>
        <React.Fragment>
          <Navbar />
          <Switch>
            <Route exact  path='/' component={ProductList}/>
            <Route exact  path ='/details' component={Details}/>
            <Route exact  path='/cart' component={Cart}/>
            <Route exact component={Default}/>
          </Switch>
          <Modal />
        </React.Fragment>
      </BrowserRouter> 
    );
  }
}

export default withRouter (App);
