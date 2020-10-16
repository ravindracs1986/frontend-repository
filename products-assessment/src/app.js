import React, {Component} from 'react';
import {render} from 'react-dom';
import './app.css';
import 'materialize-css/bin/materialize.js';
import 'materialize-css/bin/materialize.css';
import $ from 'jquery';

/* Importing Components */
import Header from './components/header';
import Footer from './components/footer';
//import Products from './components/products';
import ProductItems from './components/productItems';

class App extends Component {

  constructor() {
    super();
    this.state = {
      loading: true,
      productList: [],
      filteredProducts: [],
      q: ''
    }

    this.filterProductList = this.filterProductList.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const q = event.target.value.toLowerCase();
    this.setState({ q }, () => this.filterProductList());
  }

// For filtering the Product object w.r.t name
filterProductList() {
  let prodts = this.state.productList;
  let q = this.state.q;

  prodts = prodts.filter(function(prdct) {
    return prdct.ProductName.toLowerCase().indexOf(q) != -1; // returns true or false
  });
  this.setState({ filteredProducts: prodts });
}

// AJAX request to get all the prodts
 getAllProducts() {
  $.ajax({
    url: 'http://demo3587227.mockable.io/productList',
    dataType: 'json',
    cache: false,
    success: function(data) {
      this.setState({productList: data}, function() {
        this.setState({loading: false});
        this.setState({filteredProducts: data});
        // Logging the response
        //console.log(this.state);
      });
    }.bind(this),
    error: function(xhr, status, err) {
      console.log(err);
    }
  });
}


componentWillMount() {
  this.getAllProducts();
}

componentDidMount() {
  this.getAllProducts();
}

render() {
      if(this.state.loading) {
      return (
        <div className="Loader"></div>
      )
  }

  return (
      <div>
        <Header />
        {/* <input type='text' className="FilterTextBox" onChange={this.onChange} placeholder='Filter by Name' /> */}
          <ProductItems productList={this.state.filteredProducts}/>
        <Footer />
      </div>
    )
  }



  
}

render(<App />,document.getElementById('AppContainer'));
