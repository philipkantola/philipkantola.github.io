import React from 'react';



const SearchBar = props => (
	<form onSubmit={props.getCity}>
		<input type="text" name="city" placeholder="Enter a city"/>
		<button>Get Population</button>
	</form>
);
  
  export default SearchBar; 