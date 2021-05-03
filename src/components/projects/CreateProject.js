import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions.js';

class CreateProject extends Component {

	state = { title: '', content: '' }

	handleChange = (e) => { this.setState({[ e.target.id ]: e.target.value}); }
	handleSubmit = (e) => { 
		e.preventDefault(); 
		this.props.createProject();
	}

	render(){
		return(
			<div className="container">

				<h2>Create Project</h2>

				<form className="" onSubmit={ this.handleSubmit }>
					<h5 className="grey-text text-darken-5"></h5>
					<div className="input-field">
						<label htmlFor="text">Title</label>
						<input type="text" id="title" onChange={ this.handleChange } value="123"/>
					</div>
					<div className="input-field">
						<label htmlFor="content">Content</label>
						<textarea className="materialize-textarea" name="content" id="content" onChange={ this.handleChange } value="123"></textarea>
					</div>
					<div className="input-field">
						<button type="submit" id="submit" className="waves-effect waves-light btn-small pink lighten-5 grey-text">Create</button>
					</div>
				</form>

			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		subscribe: (project) => dispatch(createProject(project))
		}
}

export default connect( null, mapDispatchToProps )(CreateProject);