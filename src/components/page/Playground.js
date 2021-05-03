import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Playground extends Component {
	render(){
		return(
			<div>
				<div className="container center-align">
		    		<h2 className="pad-20">Playground</h2>
			    	<h3 className="speech-bubble Beeper white-text pad-20">
			    		Shorts is coming soon. Look forward to short stories and videos to show up here. Content is supplied
			    		for free and can be accessed from your computer, tablet, or mobile smart phone. 
			    	</h3>
					<img src="images/tmp/Beeper.png" style={{paddingTop:'60px'}} alt="Beeper"/>
					<div className="pad-100">
						<Link to="/" className="btn Beeper">Home</Link>
					</div>
			    </div>
			</div>
		)
	}
}

export default Playground;