import React from 'react';

// landing page
class Home extends React.Component {

  render() {

    return (
      <div>
        <input type='button' value="SEARCH BY CITY" onClick={() => this.props.onClickCitySearchBtn("citySearchPage")} />
        <input type='button' value="SEARCH BY COUNTRY" onClick={() => this.props.onClickCountrySearchBtn("countrySearchPage")} />
      </div>
    );
  }

}

export default Home; 