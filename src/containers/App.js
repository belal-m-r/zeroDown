import React from 'react';
import units from '../assets/units';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Navbar from '../components/Navbar/Navbar';
import FilterBar from '../components/searchAndFilter/FilterBar/FilterBar';
import SearchBar from '../components/searchAndFilter/SearchBar/SearchBar';
import MapsContainer from '../components/MapsContainer';
import Listings from '../components/Listings/Listings';
import Aux from '../hoc/Auxiliary';
import Modal from '../components/UI/Modal/Modal';
import HomeCard from '../components/Listings/HomeCard/HomeCard';



const mapStyles = {
  width: '100%',
  height: '800px',
};
class App extends React.Component {
  state = {
    units : units.properties,
    modalPopup : {
      status : false,
      unitData : {
        id : null
      }
    }
  };

  popupHandler = (event) => {
    this.setState({modalPopup : {
      status : true,
      unitData : {
        id : event.id
      }
    }});
    
  };

  toggleSearchHandler = () => {
    this.setState({modalPopup : {
      status : false,
      unitData : {
        id : null
      }
    }});
  };


  render() {
    let unit = null;
    let homeCard = null;
    if (this.state.modalPopup.status) {
      unit = this.state.units[this.state.modalPopup.unitData.id];
      homeCard = <HomeCard 
            popupClass="unitPopup"
            price={unit.price}
            key={unit._id}
            picture={unit.picture}
            address={unit.address}
            bedrooms={unit.bedrooms}
            bathrooms={unit.bathrooms}
            carSpaces={unit.carSpaces}
          />
    }
    return (
        <Aux >
          <Navbar />
          <FilterBar />
          <SearchBar />
          <div className="row">
            <div className=' mpCon col-12 col-md-8 col-lg-5 col-xl-6'>
              <MapsContainer 
                units={this.state.units}
                showModal={(e) => this.popupHandler(e)}
              /> 
              {/* <Modal  home={this.state.units[this.state.modalPopup.unitData.id]} 
                      show={this.state.modalPopup.status} 
                      modalClosed={this.backdropCloseHandler}>
              </Modal> */}
              <div 
                onClick={this.toggleSearchHandler} 
                className="backDrop"
                hidden={!this.state.modalPopup.status}>
              </div>
              {homeCard}
            </div>
            <div className='col-12 col-md-4 col-lg-7 col-xl-6'>
              <Listings units={this.state.units} /> 
            </div>
          </div>
        </Aux>
    );
  }
}

export default App;
