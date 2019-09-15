import React from 'react';
import Button from 'react-bootstrap/Button';

// landing page
class Home extends React.Component {

  render() {

    return (
      <div>
        <div className="homeBtnGroup"> 
        <Button className="homeBtn" variant="info" size="lg" onClick={() => this.props.onClickCitySearchBtn("citySearchPage")}>
          SEARCH BY CITY
          </Button>
        <Button className="homeBtn" variant="info" size="lg" onClick={() => this.props.onClickCountrySearchBtn("countrySearchPage")}>
          SEARCH BY COUNTRY
          </Button>
        </div>
     
      </div>
    );
  }

}

export default Home; 