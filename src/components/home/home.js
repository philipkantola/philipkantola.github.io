import React from 'react';

class Home extends React.Component {

  render() {

    return (
      <div>
        <input type='button' value="SEARCH BY CITY" onClick={this.props.onClickCityPage} />
        <input type='button' value="SEARCH BY COUNTRY" onClick={this.props.onClickCountryPage} />
      </div>
    );
  }

}

export default Home; 