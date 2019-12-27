import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import units from '../assets/units';


const mapStyles = {
    width: '100%',
    height: '100%',
};

const MapsContainer = ( props ) => {

      const displayMarkers = units.properties.map((unit, index) => {
          return <Marker title={unit.price} key={index} id={index} position={{
           lat: unit.latitude,
           lng: unit.longitude
         }}
         onClick={(e) => props.showModal(e)} 
         >
         </Marker>
        });

        return (
              <Map
                google={props.google}
                zoom={16}
                style={mapStyles}
                initialCenter={{ lat: -33.944576, lng: 151.25584}}
              >
                {displayMarkers}
              </Map>
        );
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyAseyGhy0v5K_NTF1zoVyJ5-L6T4C-WBrg'
  })(MapsContainer);