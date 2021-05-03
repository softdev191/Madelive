import React from 'react';
import { Link } from 'react-router-dom';

const Shorts = (props) => {
	return(
		<div>
			<div className="container center-align">
	    		<h2 className="pad-20">Shorts</h2>
		    	<h3 className="speech-bubble Me white-text pad-20">
		    		Shorts is coming soon. Look forward to short stories and videos to show up here. Content is supplied
		    		for free and can be accessed from your computer, tablet, or mobile smart phone. 
		    	</h3>
				<img src="images/tmp/Me.png" style={{paddingTop:'60px'}} alt="Me" />
				<div className="pad-100">
					<Link to="/" className="btn Me">Home</Link>
				</div>
		    </div>
		</div>
	)
}

export default Shorts;