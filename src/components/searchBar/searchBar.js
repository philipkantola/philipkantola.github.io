import React from 'react';



const SearchBar = props => (
	<div className="divv">
		<form className="searchForm" onSubmit={props.getContent}>
			<input type="text" autoComplete="off" name={props.searchObject} placeholder={'Enter a ' + props.searchObject} /><br/>
			<div className="btn-wrap">
			<button className="searchBtn"><i className="fas fa-search fa-2x"></i></button>
			</div>
		</form>
	</div>
	
);
  
  export default SearchBar; 