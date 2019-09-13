import React from 'react';


class CityPage extends React.Component {

    render() {
      return (
        <div>
        <h2>{this.props.city}</h2> 
        <p>POPULATION</p>
        <p>{this.props.population} </p> 
         

        </div>
      );
    }
  
  }
  
  export default CityPage; 