import React from 'react';
import Button from 'react-bootstrap/Button';



class CountryPage extends React.Component {

    render() {
      return (
        <div>
         <h2>{this.props.topCities[0].countryName}</h2>
          <Button variant="primary" size="lg">
          {this.props.topCities[0].name}
          </Button>
          <Button variant="primary" size="lg">
          {this.props.topCities[1].name}
          </Button>
          <Button variant="primary" size="lg">
          {this.props.topCities[2].name}
          </Button>
        </div>
      );
    }
  }
  
  export default CountryPage; 