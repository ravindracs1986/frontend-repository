import React, {Component} from 'react';
import {render} from 'react-dom';

export default class Footer extends Component {
  render() {
    return (
      <footer className="page-footer blue-grey darken-1">
          
          <div className="footer-copyright">
            <div className="container">
            © 2016 Copyright products Assessment
            {/* <a className="grey-text text-lighten-4 right" href="#!">More Links</a> */}
            </div>
          </div>
        </footer>
    )
  }
}
