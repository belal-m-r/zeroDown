import React from 'react';
import HomeCard from './HomeCard/HomeCard';
import Aux from '../../hoc/Auxiliary';
import classes from './Listings.module.scss';

const Listings = ( props ) => {

    let units = (
        <Aux>
                {props.units.map(unit => {
                    return <HomeCard 
                            key={unit._id}
                            price={unit.price}
                            picture={unit.picture}
                            address={unit.address}
                            city={unit.city}
                            bedrooms={unit.bedrooms}
                            bathrooms={unit.bathrooms}
                            />
                })}
        </Aux>
    )

    return (
        <div className={classes.Listings}>
            {units}
        </div>
    );
};

export default Listings;
