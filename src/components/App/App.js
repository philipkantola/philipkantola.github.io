import React from 'react';

import Home from '../home/home';
import CitySearch from '../citySearch/citySearch';
import CountrySearch from '../countrySearch/countrySearch';
import CityPage from '../cityPage/cityPage';
import CountryPage from '../countryPage/countryPage';
import Loader from '../loader/loader';

class App extends React.Component {

 
  state = { 
    currentPage: "home",
    city: undefined,
    country: undefined,
    population: undefined, 
    error: undefined,
    loading: false,
    topCities: []
  
  }
  
// function to fetch information about desired city from API 
  getCity = async (e) => {
    e.preventDefault();
    this.setState({ loading: true})
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.geonames.org/searchJSON?q=${city}&maxRows=10&username=weknowit`);
    const data = await api_call.json();
    this.setState({ loading: false})
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
// function to fetch information about desired country from API 
  getCountry = async (e) => {
    e.preventDefault();
    this.setState({ loading: true})
    const country = e.target.elements.country.value;
    // fetching top 3 cities over 1000 population from chosen country ordered by population
    const api_call = await fetch(`http://api.geonames.org/searchJSON?q=${country}&maxRows=3&cities=cities1000&orderby=population&username=weknowit`);
    const data = await api_call.json();
    this.setState({ loading: false})
    this.setState({topCities: data.geonames});
    this.setCurrentPage("countryPage");
    console.log(data.geonames);
  
  }
  

setCurrentPage = (name) => {
  this.setState({
    currentPage: name
  })
}

setCityAndPage = (cityNumber) =>{
  this.setState({
    ...this.state,
    city: this.state.topCities[cityNumber].name,
    country: this.state.topCities[cityNumber].countryName,
    population: this.state.topCities[cityNumber].population, 
    error: undefined
  })
  this.setCurrentPage("cityPage");
}


  render() {
    if (this.state.loading) return <Loader />;
    return(
      <div> 
        <h1> City Pop </h1>
        {this.state.currentPage === "home" && <Home onClickCitySearchBtn ={this.setCurrentPage} onClickCountrySearchBtn = {this.setCurrentPage}/>}
        {this.state.currentPage === "citySearchPage" && <CitySearch getCity = {this.getCity} error = {this.state.error} searchObject = "city" />}
        {this.state.currentPage === "countrySearchPage" && <CountrySearch getCountry = {this.getCountry} searchObject = "country" />}
        {this.state.currentPage === "cityPage" && <CityPage 
          city = {this.state.city} 
          country = {this.state.country} 
          population = {this.state.population} 
          error = {this.state.error} />}
        {this.state.currentPage === "countryPage" && <CountryPage 
          topCities = {this.state.topCities}
          error = {this.state.error}
          setCity = {this.setCityAndPage}
          />}
      </div>
    );
  }
  

  
}

export default App; 