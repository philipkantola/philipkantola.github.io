import React from 'react';
import Button from 'react-bootstrap/Button';

// landing page
class Home extends React.Component {

  render() {

    return (
      <div>
        <Button variant="primary" size="lg" onClick={() => this.props.onClickCitySearchBtn("citySearchPage")}>
          SEARCH BY CITY
          </Button>
        <Button variant="primary" size="lg" onClick={() => this.props.onClickCountrySearchBtn("countrySearchPage")}>
          SEARCH BY COUNTRY
          </Button>
      </div>
    );
  }

}

export default Home; 