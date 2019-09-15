import React from 'react';
import Button from 'react-bootstrap/Button';



class CountryPage extends React.Component {

  render() {
    return (
      <div className="cityBtnGroup">
        <h2 align="center">{this.props.topCities[0].countryName}</h2>
        <div className ="cityBtn" >
        <Button variant="info" size="lg" onClick={() => this.props.setCity(0)}>
          {this.props.topCities[0].name}
        </Button>
        </div>
        <div className ="cityBtn" >
        <Button variant="info" size="lg" onClick={() => this.props.setCity(1)}>
          {this.props.topCities[1].name}
        </Button>
        </div>
        <div className ="cityBtn" >
        <Button  variant="info" size="lg" onClick={() => this.props.setCity(2)}>
          {this.props.topCities[2].name}
        </Button>
        </div>
      </div>
    );
  }
}

export default CountryPage; 