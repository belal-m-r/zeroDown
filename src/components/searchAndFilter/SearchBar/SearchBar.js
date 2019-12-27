import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faDog, faTree, faSun, faHeart } from '@fortawesome/free-solid-svg-icons';
import classes from './SearchBar.module.scss';

class SearchBar extends Component {

    state = {
        best : true,
        light : true,
        dog : true,
        green : true,
        bestSelected : false,
        lightSelected : false,
        dogSelected : false,
        greenerySelected : false,
    }

    featureSelectHandler = (type) => {
        this.setState({
            [type] : !this.state[type]
        })
    }

    mouseEnterHandler = (type) => {
        this.setState({
            [type] : !this.state[type]
        })
    }
    mouseLeaveHandler = (type) => {
        this.setState({
            [type] : !this.state[type]
        })
    }

    render ( props ) {
        return (
            <nav className={`navbar ${classes.SearchBar}`}>
                    <form className="form-inline">
                        <span className={classes.preferences}>PREFERENCES</span>
                        <div className={classes.optionsContainer}
                              onMouseEnter={() => this.mouseEnterHandler('best')} 
                              onMouseLeave={() => this.mouseLeaveHandler('best')}>
                            <button 
                                onClick={() => this.featureSelectHandler('bestSelected')}
                                className={`btn ${classes.area} ${this.state.bestSelected ? `${classes.bestSelected}` : ""}`} 
                                type="button">
                                <FontAwesomeIcon icon={faStar} />    
                                <span>Best of Bay Area</span>                          
                            </button>
                            <div className={`${classes.toolTip} ${!this.state.best ? `${classes.show}` : ""}`}>
                                <span className={classes.blockSpan}>
                                    <FontAwesomeIcon icon={faStar} />
                                    <span>Best of Bay Area</span>
                                </span>
                                <p>
                                    Our curated selection of homes in the Bay Area.
                                </p>
                            </div>
                        </div>
                        <div className={classes.optionsContainer}
                              onMouseEnter={() => this.mouseEnterHandler('light')} 
                              onMouseLeave={() => this.mouseLeaveHandler('light')}>
                            <button 
                                onClick={() => this.featureSelectHandler('lightSelected')}
                                className={`btn ${classes.area} ${this.state.lightSelected ? `${classes.lightSelected}` : ""}`} 
                                type="button">
                                <FontAwesomeIcon icon={faSun} />    
                                <span>Most NAtural Light</span>                          
                            </button>
                            <div className={`${classes.toolTip} ${!this.state.light ? `${classes.show}` : ""}`}>
                                <span className={classes.blockSpan}>
                                    <FontAwesomeIcon icon={faSun} />
                                    <span>Most NAtural Light</span>
                                </span>
                                <p>
                                    We look at key factors, such as the position of the home and solar panels, to determine the sunlight the home receives so home seekers can decide if the home is a fit or not.
                                </p>
                            </div>
                        </div>
                        <div className={classes.optionsContainer}
                              onMouseEnter={() => this.mouseEnterHandler('dog')} 
                              onMouseLeave={() => this.mouseLeaveHandler('dog')}>
                            <button 
                                onClick={() => this.featureSelectHandler('dogSelected')}
                                className={`btn ${classes.area} ${this.state.dogSelected ? `${classes.dogSelected}` : ""}`} 
                                type="button">
                                <FontAwesomeIcon icon={faDog} />    
                                <span>Dog Friendly</span>                          
                            </button>
                            <div className={`${classes.toolTip} ${!this.state.dog ? `${classes.show}` : ""}`}>
                                <span className={classes.blockSpan}>
                                    <FontAwesomeIcon icon={faDog} />
                                    <span>Dog Friendly</span>
                                </span>
                                <p>
                                    Our curated selection of homes in the Bay Area.
                                </p>
                            </div>
                        </div>
                        <div className={classes.optionsContainer}
                              onMouseEnter={() => this.mouseEnterHandler('green')} 
                              onMouseLeave={() => this.mouseLeaveHandler('green')}>
                            <button 
                                onClick={() => this.featureSelectHandler('greenerySelected')}
                                className={`btn ${classes.area} ${this.state.greenerySelected ? `${classes.greenerySelected}` : ""}`} 
                                type="button">
                                <FontAwesomeIcon icon={faTree} />    
                                <span>Near Greenery</span>                          
                            </button>
                            <div className={`${classes.toolTip} ${!this.state.green ? `${classes.show}` : ""}`}>
                                <span className={classes.blockSpan}>
                                    <FontAwesomeIcon icon={faTree} />
                                    <span>Near Greenery</span>
                                </span>
                                <p>
                                    Our curated selection of homes in the Bay Area.
                                </p>
                            </div>
                        </div>
                    </form>
                </nav>
        );
    }
};

export default SearchBar;







