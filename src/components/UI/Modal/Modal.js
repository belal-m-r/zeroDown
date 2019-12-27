import React, {Component} from 'react';
import Aux from '../../../hoc/Auxiliary';
import HomeCard from '../../Listings/HomeCard/HomeCard';
import classes from './Modal.module.css';

class Modal extends Component {
    unit = null;
    homeCard = null;

    state = {
        showModal : false,
        unitId : null
    };

    render ( props ) {
        if (this.props.home) {
            console.log('XXXX', this.props.home);
            this.unit = this.props.home;
            this.homeCard = <HomeCard 
                key={this.unit._id}
                picture={this.unit.picture}
                address={this.unit.address}
                bedrooms={this.unit.bedrooms}
                bathrooms={this.unit.bathrooms}
                carSpaces={this.unit.carSpaces}
            />
        }
        return (
            <Aux>
                <div 
                    className={classes.Modal}
                    style={{
                        transform : this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity : this.props.show ? '1' : '0'
                    }}        
                    >
                    {this.homeCard}
                </div>
            </Aux>
        ) 

    }
}


export default Modal;