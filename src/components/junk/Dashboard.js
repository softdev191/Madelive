import React, { Component } from 'react';
import ProjectList from '../projects/ProjectList.js';
import Notifications from './Notifications.js';
import { connect } from 'react-redux';

class Dashboard extends Component {
	render(){
		const { projects } = this.props;
		return(
			<div className="dashboard container">
				{/*
				<div className="slider">
				    <ul className="slides">
				      <li>
				        <img src="/logo512.png" />
				        <div className="caption center-align">
				          <h3>className is our big Tagline!</h3>
				          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
				        </div>
				      </li>
				      <li>
				        <img src="https://cdn.pixabay.com/photo/2015/09/01/09/32/banner-916673__340.jpg" />
				        <div className="caption left-align">
				          <h3>Left Aligned Caption</h3>
				          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
				        </div>
				      </li>
				      <li>
				        <img src="/logo512.png" />
				        <div className="caption right-align">
				          <h3>Right Aligned Caption</h3>
				          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
				        </div>
				      </li>
				      <li>
				        <img src="https://cdn.pixabay.com/photo/2015/09/01/09/32/banner-916673__340.jpg" />
				        <div className="caption center-align">
				          <h3>This is our big Tagline!</h3>
				          <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
				        </div>
				      </li>
				    </ul>
				</div>
				*/}
			
				<div className="row">
					<div className="col s12 m6">
						<ProjectList projects={projects} />
					</div>
					<div className="col s12 m5 offset-m1">
						<Notifications />
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		projects: state.project.projects
		}
}

export default connect(mapStateToProps)(Dashboard);