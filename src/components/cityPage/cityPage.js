import React from 'react';


class CityPage extends React.Component {

  render() {
    return (
      <div>
        <h2 align="center">{this.props.city}</h2>
        <div className="cityInfo">
          <p className="populationTitle">POPULATION</p>
          <p className="populationText">{this.props.population} </p>
        </div>
      


      </div>
    );
  }

}

export default CityPage; 