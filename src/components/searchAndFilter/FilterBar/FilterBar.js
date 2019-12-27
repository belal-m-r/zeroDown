import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faTag } from '@fortawesome/free-solid-svg-icons';
import classes from './FilterBar.module.scss';

class FilterBar extends Component {

    state = {
        price : true,
        beds : true,
        baths : true,
        area : true,
        best : true,
        light : true,
        dog : true,
        green : true,
        priceState : {
            triggered : false,
            min : null,
            max : null
        },
        bedsState : {
            triggered : false,
            selected : 0,
            value : null
        },
        bathsState : {
            triggered : false,
            selected : 0,
            value : null
        },
        areaState : {
            triggered : false,
            min : null,
            max : null
        }

    }

    toggleSearchHandler = (type) => {
        this.setState({
            price : true,
            beds : true,
            baths : true,
            area : true,
            [type] : !this.state[type]
        });
    }

    triggerFiltersHandler = (event) => {  
        let triggered = !(event.target.value === "");
        this.setState({
            [event.target.dataset.type] : {
                triggered,
                selected : [event][0].target.value,
                value : [event][0].target.value
            }
        });
    }

    minRangeHandler = (event) => {  
        // console.log(event.target.value);
        // console.log(event.target.dataset.type);
        // console.log([event][0].target.value);
        // console.log(this.state[[event][0].target.dataset.type]);
        let triggered = !(event.target.value === "");
        this.setState({
            [event.target.dataset.type] : {
                triggered,
                min : [event][0].target.value,
                max : this.state[[event][0].target.dataset.type].max
            }
        });
    }

    maxRangeHandler = (event) => {  
        let triggered = !(event.target.value === "");
        this.setState({
            [event.target.dataset.type] : {
                triggered,
                min : this.state[[event][0].target.dataset.type].min,
                max : [event][0].target.value
            }
        });
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
        // let priceRange = '';
        const priceRangeFun = () => {
            let priceRange = 'Price';
            if (this.state.priceState.min && !this.state.priceState.max) {priceRange = `${this.state.priceState.min} +`};
            if (!this.state.priceState.min && this.state.priceState.max) {priceRange = `Up to ${this.state.priceState.max}`};
            if (this.state.priceState.min && this.state.priceState.max) {priceRange = `${this.state.priceState.min} - ${this.state.priceState.max}`};
            return priceRange;
        }
        return (
            <nav className={`navbar ${classes.Filterbar}`}>
                    <form className="form-inline">
                        <div className={classes.optionsContainer}>
                            <button
                                className={`btn ${classes.PriceBtn} ${this.state.priceState.triggered ? `${classes.triggered}` : ""} ${!this.state.price ? `${classes.active}` : ""}`}
                                onClick={() => this.toggleSearchHandler('price')} type="button">
                                <FontAwesomeIcon icon={faTag} />
                                {priceRangeFun()}
                            </button>
                            <div 
                            onClick={() => this.toggleSearchHandler('price')} 
                            className={classes.modal} 
                            hidden={this.state.price}>
                            </div>
                            <div className={`${classes.searchOptions} ${classes.fromTo}`} hidden={this.state.price}>
                                <select onChange={(event) => this.minRangeHandler(event)} data-type="priceState">
                                    <option value="">No min</option>
                                    <option value="550">$500K</option>
                                    <option value="650">$650K</option>
                                    <option value="750">$750K</option>
                                </select>
                                <span>to</span>
                                <select onChange={(event) => this.maxRangeHandler(event)} data-type="priceState">
                                    <option value="volvo">No max</option>
                                    <option value="550">$500K</option>
                                    <option value="650">$650K</option>
                                    <option value="750">$750K</option>
                                </select>
                            </div>
                        </div>
                        <div className={classes.optionsContainer}>
                            <button 
                                onClick={() => this.toggleSearchHandler('beds')} 
                                className={`btn ${this.state.bedsState.triggered ? `${classes.triggered}` : ""} ${!this.state.beds ? `${classes.active}` : ""}`} 
                                type="button">
                                <FontAwesomeIcon icon={faBed} />
                                {this.state.bedsState.value}
                                Beds
                            </button>
                            <div 
                            onClick={() => this.toggleSearchHandler('beds')} 
                            className={classes.modal} 
                            hidden={this.state.beds}>
                            </div>
                            <div className={`${classes.searchOptions} ${classes.selectNo}`} hidden={this.state.beds}>
                                <div className={`${this.state.bedsState.selected == 0 ? `${classes.selected}` : ""}`}>
                                    <span>All</span>
                                    <input onClick={(event) => this.triggerFiltersHandler(event)} data-type="bedsState" type="radio" name="bedsNo" value=""></input> 
                                </div>
                                <div className={`${this.state.bedsState.selected == 1 ? `${classes.selected}` : ""}`}>
                                    <span>1+</span>
                                    <input onClick={(event) => this.triggerFiltersHandler(event)} data-type="bedsState" type="radio" name="bedsNo" value="1"></input> 
                                </div>
                                <div className={`${this.state.bedsState.selected == 2 ? `${classes.selected}` : ""}`}>
                                    <span>2+</span>
                                    <input onClick={(event) => this.triggerFiltersHandler(event)} data-type="bedsState" type="radio" name="bedsNo" value="2"></input> 
                                </div>
                                <div className={`${this.state.bedsState.selected == 3 ? `${classes.selected}` : ""}`}>
                                    <span>3+</span>
                                    <input onClick={(event) => this.triggerFiltersHandler(event)} data-type="bedsState" type="radio" name="bedsNo" value="3"></input> 
                                </div>
                                <div className={`${this.state.bedsState.selected == 4 ? `${classes.selected}` : ""}`}>
                                    <span>4+</span>
                                    <input onClick={(event) => this.triggerFiltersHandler(event)} data-type="bedsState" type="radio" name="bedsNo" value="4"></input> 
                                </div>
                                <div className={`${this.state.bedsState.selected == 5 ? `${classes.selected}` : ""}`}>
                                    <span>5+</span>
                                    <input onClick={(event) => this.triggerFiltersHandler(event)} data-type="bedsState" type="radio" name="bedsNo" value="5"></input> 
                                </div>
                            </div>
                            
                        </div>
                        <div className={classes.optionsContainer}>
                            <button 
                                onClick={() => this.toggleSearchHandler('baths')}
                                className={`btn ${this.state.bathsState.triggered ? `${classes.triggered}` : ""} ${!this.state.baths ? `${classes.active}` : ""}`}
                                type="button">
                                <FontAwesomeIcon icon={faBath} />
                                {this.state.bathsState.value}
                                Baths
                            </button>
                            <div 
                            onClick={() => this.toggleSearchHandler('baths')} 
                            className={classes.modal} 
                            hidden={this.state.baths}>
                            </div>
                            <div className={`${classes.searchOptions} ${classes.selectNo}`} hidden={this.state.baths}>
                                <div className={`${this.state.bathsState.selected == 0 ? `${classes.selected}` : ""}`}>
                                    <span>All</span>
                                    <input 
                                        onClick={(event) => this.triggerFiltersHandler(event)} 
                                        data-type="bathsState" 
                                        type="radio" name="bathsNo" value="">
                                    </input> 
                                </div>
                                <div className={`${this.state.bathsState.selected == 1 ? `${classes.selected}` : ""}`}>
                                    <span>1+</span>
                                    <input 
                                        onClick={(event) => this.triggerFiltersHandler(event)} 
                                        data-type="bathsState" 
                                        type="radio" name="bathsNo" value="1">
                                    </input> 
                                </div>
                                <div className={`${this.state.bathsState.selected == 2 ? `${classes.selected}` : ""}`}>
                                    <span>2+</span>
                                    <input 
                                        onClick={(event) => this.triggerFiltersHandler(event)} 
                                        data-type="bathsState" 
                                        type="radio" name="bathsNo" value="2">
                                    </input> 
                                </div>
                                <div className={`${this.state.bathsState.selected == 3 ? `${classes.selected}` : ""}`}>
                                    <span>3+</span>
                                    <input 
                                        onClick={(event) => this.triggerFiltersHandler(event)} 
                                        data-type="bathsState" 
                                        type="radio" name="bathsNo" value="3">
                                    </input> 
                                </div>
                                <div className={`${this.state.bathsState.selected == 4 ? `${classes.selected}` : ""}`}>
                                    <span>4+</span>
                                    <input 
                                        onClick={(event) => this.triggerFiltersHandler(event)} 
                                        data-type="bathsState" 
                                        type="radio" name="bathsNo" value="4">
                                    </input> 
                                </div>
                                <div className={`${this.state.bathsState.selected == 5 ? `${classes.selected}` : ""}`}>
                                    <span>5+</span>
                                    <input 
                                        onClick={(event) => this.triggerFiltersHandler(event)} 
                                        data-type="bathsState" 
                                        type="radio" name="bathsNo" value="5">
                                    </input> 
                                </div>
                            </div>
                        </div>
                        <div className={classes.optionsContainer}>
                            <button onClick={() => this.toggleSearchHandler('area')} className="btn" type="button">Area</button>
                            <div className={`${classes.searchOptions} ${classes.fromTo}`} hidden={this.state.area}>
                                <select>
                                    <option value="volvo">No min</option>
                                    <option value="550">$500K</option>
                                    <option value="650">$650K</option>
                                    <option value="750">$750K</option>
                                </select>
                                <span>to</span>
                                <select>
                                    <option value="volvo">No max</option>
                                    <option value="550">$500K</option>
                                    <option value="650">$650K</option>
                                    <option value="750">$750K</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </nav>
        );
    }
};

export default FilterBar;







