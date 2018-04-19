import React from 'react';

function handleClick(props) {
	props.addVals();


}


function ClickCrystal(props) {
	return(
		<div className="card img-container" onClick={() => handleClick(props)}>
			<img alt={props.name} src={props.image} />
		</div>
	)
}




export default ClickCrystal;