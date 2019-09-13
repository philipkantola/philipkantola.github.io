import React from 'react';

import Home from '../home/home';
import CitySearch from '../citySearch/citySearch';
import CountrySearch from '../countrySearch/countrySearch';
import CityPage from '../cityPage/cityPage';
import CountryPage from '../countryPage/countryPage';

class App extends React.Component {

 
  state = { 
    currentPage: "home",
    city: undefined,
    country: undefined,
    population: undefined, 
    error: undefined
  
  }
  
// function to fetch information about desired city from API 
  getCity = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.geonames.org/searchJSON?q=${city}&maxRows=10&username=weknowit`);
    const data = await api_call.json();
    this.setCurrentPage("cityPage");
    console.log(data)
    // if nothing is put into the form
    if(!city){
      this.setCurrentPage("citySearchPage");
    }
    // if city does not exist in db
    else if(data.totalResultsCount === 0){
      this.setState({
        ...this.state,
        city: undefined,
        country: undefined,
        population: undefined,
        error: "There exists no such city in our database, try again"
      })
      this.setCurrentPage("citySearchPage");
    } else{
      // if city exists in db
      this.setState({
        ...this.state,
        city: data.geonames[0].toponymName,
        country: data.geonames[0].countryName,
        population: data.geonames[0].population, 
        error: undefined
      })
    }
  
  }

setCurrentPage = (name) => {
  this.setState({
    currentPage: name
  })
}


  render() {
    return(
      <div> 
        <h1> City Pop </h1>
        {this.state.currentPage === "home" && <Home onClickCitySearchBtn ={this.setCurrentPage} onClickCountrySearchBtn = {this.setCurrentPage}/>}
        {this.state.currentPage === "citySearchPage" && <CitySearch getCity = {this.getCity} error = {this.state.error} />}
        {this.state.currentPage === "countrySearchPage" && <CountrySearch />}
        {this.state.currentPage === "cityPage" && <CityPage 
          city = {this.state.city} 
          country = {this.state.country} 
          population = {this.state.population} 
          error = {this.state.error} />}
      </div>
    );
  }
  

  
}

export default App; 