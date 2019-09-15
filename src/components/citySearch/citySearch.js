import React from 'react';

import SearchBar from '../searchBar/searchBar';


class CitySearch extends React.Component {

    render() {
      return (
        <div>
         <h2>SEARCH BY CITY</h2>
         <SearchBar getContent = {this.props.getCity} searchObject = {this.props.searchObject} />
         
         {this.props.error && <p> {this.props.error} </p>}
        </div>
      );
    }
  
  }
  
  export default CitySearch; 