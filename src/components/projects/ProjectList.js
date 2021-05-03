import React from 'react';
import ProjectSummary from './ProjectSummary.js';

const ProjectList = ({projects}) => {
	return (
		<div className="project-list section">
			<h2>Projects</h2>
			{ projects && projects.map(project => {
				return(
					<ProjectSummary project={project} key={project.id}/>
					)
			})}
		</div>
	)
}

export default ProjectList;