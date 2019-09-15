import React from 'react';



const SearchBar = props => (
	<div>
		<form onSubmit={props.getContent}>
			<input type="text" name={props.searchObject} placeholder={'Enter a ' + props.searchObject} /><br/>
			<button><i className="fas fa-search"></i></button>
		</form>
	</div>
	
);
  
  export default SearchBar; 