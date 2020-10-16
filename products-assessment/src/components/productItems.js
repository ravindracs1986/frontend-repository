import React, {Component} from 'react';
import {render} from 'react-dom';
import fetch from 'isomorphic-fetch';

export default class ProductItems extends Component {

    
 
  render() {
    return (
            <div class="col-lg-12 col-md-7">
                    <div class="filter__item">
                        <div class="row">
                            <div class="col-lg-4 col-md-5">
                                <div class="filter__sort">
                                    <span>Sort By</span>
                                      <select class="show_div">
                                            <option value="0">Product Name</option>
                                            <option value="1">UPC12 Number</option>
                                        </select>
                                  </div>
                            </div>
                           
                        </div>
                    </div>
                  
                    <div class="row">

                    <React.Fragment>
                    {this.props.productList.map(listitem => (
                        <div class="col-lg-4 col-md-6 col-sm-6">
                            <div class="product__item">
                                <div class="product__item__pic set-bg">
                                <img src={listitem.image_url}></img>
                                    <ul class="product__item__pic__hover">
                                        <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div class="product__item__text">
                                    <h6><a href="#">{listitem.ProductName}</a></h6>
                                    <h5><b>UPC12Number :</b>{listitem.UPC12Number}</h5>
                                </div>
                            </div>
                        </div>
                         ))}
                        </React.Fragment>
                    </div>
                    <div class="product__pagination">
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#"><i class="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>


   
    )
  }
}
