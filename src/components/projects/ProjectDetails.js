import React from 'react';
import { connect } from 'react-redux';

const ProjectDetails = (props) => {
	const project = props.project.find(element => element.id === props.match.params._id);
	return(
		<div className="container project-details">
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title">
						<h2>{ project.title }</h2>
					</span>
					<p>{ project.content }</p>
				</div>
				<div className="card-action lighten-4 grey-text">
					<div>Made Live</div>
					<div>This is the date</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return{
		project: state.project.projects
		}
}

export default connect(mapStateToProps)(ProjectDetails);