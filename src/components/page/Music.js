import React, { Component } from 'react';
//import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Music extends Component {
	render(){
		return(
			<div>
				<div className="container center-align">
		    		<h2 className="pad-20">Music</h2>
			    	<h3 className="speech-bubble Mozart white-text pad-20">
			    		The songs that ship with our Made Live branded content can be accessed and played for free here.
			    		Signed for updates for when our Music section launches.
			    	</h3>
					<img src="images/tmp/Mozart.png" style={{paddingTop:'60px'}} alt="Mozart" />
					<div className="pad-100">
						<Link to="/" className="btn Mozart">Home</Link>
					</div>
			    </div>
			</div>
		)
	}
}

export default Music;