import React from 'react';

const ProjectSummary = ({project}) => {
	return (
		<div className="card z-depth-1 project-summary">
			<div className="card-content grey-text text-darken-3">
				<span className="cart-title"><a className="" href={'/project/' + project.id }>{ project.title }</a></span>
				<p>Posted By { project.author }</p>
				<p className="grey-text">Date of stuff</p>
			</div>
		</div>
	)
}

export default ProjectSummary;