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
    topCities: []
  }

  // function to fetch information about desired city from API 
  fetchCity = async (e) => {
    e.preventDefault();
    const temp = this.state.currentPage;
    this.setCurrentPage("loading");
    const city = e.target.elements.city.value;
    const api_call = await fetch(`http://api.geonames.org/searchJSON?q=${city}&maxRows=10&username=weknowit`);
    const data = await api_call.json();
    this.setCurrentPage(temp);
    // if no input is put into the form
    if (!city) {
      this.setState({ error: "Please type in a city to continue" })
    }
    // if city does not exist in db
    else if (data.totalResultsCount === 0) {
      this.setState({
        ...this.state,
        city: undefined,
        country: undefined,
        population: undefined,
        error: "There exists no such city in our database, try again"
      })
      this.setCurrentPage("citySearchPage");
    } else {
      // if city exists in db
      this.setState({
        ...this.state,
        city: data.geonames[0].toponymName,
        country: data.geonames[0].countryName,
        population: data.geonames[0].population,
        error: undefined
      })
      this.setCurrentPage("cityPage");
    }

  }
  // function to fetch information about desired country from API 
  fetchCountry = async (e) => {
    e.preventDefault();
    const temp = this.state.currentPage;
    this.setCurrentPage("loading");
    const country = e.target.elements.country.value;
    // fetching top 3 cities over 1000 population from chosen country ordered by population
    const api_call = await fetch(`http://api.geonames.org/searchJSON?q=${country}&maxRows=3&cities=cities1000&orderby=population&username=weknowit`);
    const data = await api_call.json();
    this.setCurrentPage(temp);
    // if no input is put into the form
    if (!country) {
      this.setState({ error: "Please type in a country to continue" })
    }
    // if country does not exist in db
    else if (!(data.geonames === undefined || data.geonames.length === 0)) {
      this.setState({ topCities: data.geonames });
      this.setCurrentPage("countryPage");
    } else {
      // if country does not exist in db
      this.setState({ topCities: [] });
      this.setState({})
      this.setState({
        ...this.state,
        topCities: [],
        error: "There exists no such country in our database, try again"
      })
    }
  }

  setCurrentPage = (name) => {
    this.setState({
      currentPage: name
    })
  }
// used from countryPage to switch to cityPage
  setCityAndPage = (cityNumber) => {
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
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <h1 className="header1" align="center"> CityPop </h1>
            {this.state.currentPage === "loading" && <Loader />}
            {this.state.currentPage === "home" && <Home onClickCitySearchBtn={this.setCurrentPage} onClickCountrySearchBtn={this.setCurrentPage} />}
            {this.state.currentPage === "citySearchPage" && <CitySearch getCity={this.fetchCity} error={this.state.error} searchObject="city" />}
            {this.state.currentPage === "countrySearchPage" && <CountrySearch getCountry={this.fetchCountry} error={this.state.error} searchObject="country" />}
            {this.state.currentPage === "cityPage" && <CityPage
              city={this.state.city}
              country={this.state.country}
              population={this.state.population}
              error={this.state.error}
              onSearchAgain = {this.setCurrentPage} />}
            {this.state.currentPage === "countryPage" && <CountryPage
              topCities={this.state.topCities}
              error={this.state.error}
              setCity={this.setCityAndPage}
            />}
          </div>
        </div>
      </div >
    );
  }



}

export default App; 