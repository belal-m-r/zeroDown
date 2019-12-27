import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBed, faBath, faBorderAll, faStar, faDog, faTree, faSun, faHeart } from '@fortawesome/free-solid-svg-icons';
import classes from './HomeCard.module.scss';

const HomeCard = ( props ) => {
    return (
        <div className={classes.cardContainer}>
            <div className={`card ${classes.HomeCard} ${props.popupClass}`}>
                <img src={props.picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <div className={classes.pricesContainer}>
                        <div className={classes.MonthlyPAy}>
                            <span>$5,885</span>
                            <p>Monthly Payment</p>
                        </div>
                        <div className={classes.ListedPrice}>
                            <span>$ {props.price}</span>
                            <p>Listed Price</p>
                        </div>
                    </div>
                    <hr />
                    <div className={classes.addressContainer}>
                        <h5 className="card-title">{props.address}</h5>
                        <FontAwesomeIcon icon={faHeart} />
                        <p>{props.city}</p>
                    </div>
                    <div className={classes.data}>
                        <div>
                            <FontAwesomeIcon icon={faBed} />
                            <span>{props.bedrooms}</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faBath} />
                            <span>{props.bathrooms}</span>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faBorderAll} />
                            <span>1,461 sqft</span>
                        </div>
                    </div>
                    <div className={classes.Icons}>
                        <FontAwesomeIcon className={classes.faStar} icon={faStar} />
                        <FontAwesomeIcon className={classes.faSun} icon={faSun} />
                        <FontAwesomeIcon className={classes.faDog} icon={faDog} />
                        <FontAwesomeIcon className={classes.faTree} icon={faTree} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCard;
