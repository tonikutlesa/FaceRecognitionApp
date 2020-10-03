import React from 'react';
import Tilt from 'react-tilt'
import logoPic from './Logo.PNG'

const Logo = () => {
	return(
	<div className='ma4 mt0'>
		<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 180, width: 180 }} >
	 		<div className="Tilt-inner"> <img height='180px' width='180px' alt='logo' src={logoPic}/> </div>
		</Tilt>
	</div>
	)
}



export default Logo;