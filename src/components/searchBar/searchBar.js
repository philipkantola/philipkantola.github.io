import React from 'react';



const SearchBar = props => (
	<div>
		<form onSubmit={props.getCity}>
			<input type="text" name="city" placeholder="Enter a city" /><br/>
			<button><i className="fas fa-search"></i></button>
		</form>
	</div>
	
);
  
  export default SearchBar; 