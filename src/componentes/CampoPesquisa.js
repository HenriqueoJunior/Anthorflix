import React from "react";

const CampoPesquisa = (props) => {
	return (
		<div className='col col-sm-4'>
			<input
				className='form-control'
				value={props.value}
				onChange={(event) => props.setSearchValue(event.target.value)}
				placeholder='Buscar Filmes'
			></input>
		</div>
	);
};

export default CampoPesquisa;