import React from 'react';

function ClickCard(props) {
	return(
		<div className="card img-container" onClick={() => handleClick(props)}>
			<img alt={props.name} src={props.image} />
		</div>
	)
}



