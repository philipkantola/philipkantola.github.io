import React from 'react';

import Home from '../home/home';
import CitySearch from '../citySearch/citySearch';
import CountrySearch from '../countrySearch/countrySearch';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      isHomeState: true, 
      isCityState: false ,
      isCountryState: false 
    }
  }
// function to get information about desired city from API 
  getCity = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.geonames.org/searchJSON?q=${city}&maxRows=10&username=weknowit`);
    const data = await api_call.json();
    console.log(data)
  }
// function to show the page for city search and hide the showing
  triggerCityPage = () => {
    this.setState({
      ...this.state,
      isHomeState: false,
      isCityState: true
    })
  }
  // function to show the page for country search and hide the showing
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
        {this.state.isCityState && <CitySearch getCity = {this.getCity} />}
        {this.state.isCountryState && <CountrySearch />}
      </div>
    );
  }
  

  
}

export default App; 