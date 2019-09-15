import React from 'react';

import SearchBar from '../searchBar/searchBar';

class CountrySearch extends React.Component {

    render() {
  
      return (
        <div>
         SEARCH BY COUNTRY
         <SearchBar getContent = {this.props.getCountry} searchObject = {this.props.searchObject} />
         {this.props.error && <p> {this.props.error} </p>}
        </div>
      );
    }
  
  }
  
  export default CountrySearch; 