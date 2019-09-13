import React from 'react';

import Home from '../home/home';
import CitySearch from '../citySearch/citySearch';
import CountrySearch from '../countrySearch/countrySearch';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.triggerCityPage = this.triggerCityPage.bind(this);
    this.triggerCountryPage = this.triggerCountryPage.bind(this);
    this.state = { 
      isHomeState: true, 
      isCityState: false ,
      isCountryState: false 
    }
  }

  triggerCityPage = () => {
    this.setState({
      ...this.state,
      isHomeState: false,
      isCityState: true
    })
  }
  triggerCountryPage = () => {
    this.setState({
      ...this.state,
      isHomeState: false,
      isCountryState: true
    })
  }

  render(){
    return(
      <div> 
        <h1> City Pop </h1>
        {this.state.isHomeState && <Home onClickCityPage ={this.triggerCityPage} onClickCountryPage = {this.triggerCountryPage}/>}
        {this.state.isCityState && <CitySearch />}
        {this.state.isCountryState && <CountrySearch />}
      </div>
    );
  }
  

  
}

export default App; 