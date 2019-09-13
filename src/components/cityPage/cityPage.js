import React from 'react';


class CityPage extends React.Component {

    render() {
      return (
        <div>
         { this.props.city && <h2>{this.props.city}</h2> }
         <p>POPULATION</p>
         { this.props.population && <p>{this.props.population} </p> }
         { !this.props.city && <p>There exists no such city in our database, try again </p> }

        </div>
      );
    }
  
  }
  
  export default CityPage; 