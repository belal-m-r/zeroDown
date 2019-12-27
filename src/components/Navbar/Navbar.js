import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import classes from './Navbar.module.scss';

class Navbar extends Component {
    state = {
      navShow : false
    }

    showNav = () => {
      this.setState({navShow : !this.state.navShow})
    }

    render () {
      return (
        <nav className={`navbar navbar-expand-lg ${classes.navigationbar}`}>
          <div className={`container ${classes.container}`}>
            <a className={classes.navbarBrand}>ZeroDown</a>
            <button 
                    onClick={this.showNav}
                    className={`navbar-toggler ${classes.Toggler}`} 
                    type="button" data-toggle="collapse" 
                    data-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} />
            </button>
  
            <div className={`collapse navbar-collapse ${classes.navbarCollapse} ${this.state.navShow ? 'show' : ""}`} 
                 id="navbarSupportedContent">
              <ul className="navbar-nav">
                <li className={`nav-item ${classes.NavLnk}`}>
                  <a className="nav-link">How it Works</a>
                </li>
                <li className={`nav-item ${classes.NavLnk}`}>
                  <a className="nav-link">Customer Stories</a>
                </li>
                <li className={`nav-item ${classes.NavLnk}`}>
                  <a className="nav-link">Find Home</a>
                </li>
                <li className={`nav-item ${classes.afford}`}>
                  <button>What can I afford in the Bay Area?</button>
                </li>
                <li className={`nav-item`}>
                  <button className={classes.Login}>Login</button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      );
    }

};

export default Navbar;
