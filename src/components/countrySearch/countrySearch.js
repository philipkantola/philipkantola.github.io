import React from 'react';

import SearchBar from '../searchBar/searchBar';

class CountrySearch extends React.Component {

    render() {
  
      return (
        <div>
         SEARCH BY COUNTRY
         <SearchBar getContent = {this.props.getCountry} searchObject = {this.props.searchObject} />
        </div>
      );
    }
  
  }
  
  export default CountrySearch; 