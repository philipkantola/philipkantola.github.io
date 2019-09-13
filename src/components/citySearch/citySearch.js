import React from 'react';

import SearchBar from '../searchBar/searchBar';


class CitySearch extends React.Component {



    render() {
      return (
        <div>
         <h2>SEARCH BY CITY</h2>
         <SearchBar getCity = {this.props.getCity} />
        </div>
      );
    }
  
  }
  
  export default CitySearch; 