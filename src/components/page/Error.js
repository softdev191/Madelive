import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Error extends Component {
	render(){
		return(
			<div>
				<div className="container center-align">
		    		<h2 className="pad-20">UH OH!</h2>
			    	<h2 className="speech-bubble Rosie white-text pad-20" style={{paddingLeft: '20px',paddingRight: '20px'}}>It looks like something went wrong. Click this button below to see if we can get you back on your journey.</h2>
					<img src="images/tmp/Rosie.png" style={{paddingTop:'60px'}} alt="Rosie" />
					<div className="pad-100">
						<Link to="/" className="btn Rosie">Fix!</Link>
					</div>
			    </div>
			</div>
		)
	}
}

export default Error;