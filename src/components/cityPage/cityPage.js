import React from 'react';


class CityPage extends React.Component {

  render() {
    return (
      <div >
        <h2 align="center">{this.props.city}</h2>
        <div className="cityInfo">
          <p className="populationTitle">POPULATION</p>
          <p className="populationText">{this.props.population} </p>
        </div>    
        <button className="newSearch" onClick={() => this.props.onSearchAgain("home")}> <h4>Search Again  </h4><i className="fas fa-search fa-2x"></i></button>
      </div>
    );
  }

}

export default CityPage; 