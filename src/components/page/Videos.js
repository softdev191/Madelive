import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Videos extends Component {
	render(){
		return(
			<div>
				<div className="container center-align">
		    		<h2 className="pad-20">Videos</h2>
			    	<h3 className="speech-bubble Chunk black-text pad-20">
			    		Videos are coming soon. Look forward to short stories and videos to show up here. Content is supplied
			    		for free and can be accessed from your computer, tablet, or mobile smart phone. 
			    	</h3>
					<img src="images/tmp/Chunk.png" style={{paddingTop:'60px'}} alt="Chunk" />
					<div className="pad-100">
						<Link to="/" className="btn Chunk">Home</Link>
					</div>
			    </div>
			</div>
		)
	}
}

export default Videos;