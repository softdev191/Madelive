import React, { useEffect } from 'react';
import Carousel from '../layout/Carousel.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

function lookup(name) { return global.madelive.series.filter(function (entry) { return entry.name === name; })[0]; }

const Books = (props) => {
	var series = lookup(props.props.match.params.seriesName);
	var books = global.madelive.banners['books'][props.props.match.params.seriesName];

	return (
		<div>
			<Carousel {...props} />
			<div className="container">
				<div className="row pad-20 center">
					<h1>{series ? series.name : ''}</h1>
					<div className="card-panel hoverable pad-20">
						<p className="pad-20">{series ? series.description : ''}</p>
					</div>
					{
						props.loggedIn ? (
							<div className="switch pad-20">
								<label>
									No
								<input type="checkbox" />
									<span className="lever"></span>
									Subscribed
								</label>
							</div>
						) : null
					}
				</div>
				<div>
					{books.map((book, key) => {
						book.wrap = "carousel-item white-text " + book.class;
						book.button = "btn waves-effect " + book.class;
						book.key = book.name + key;
						return (
							<div className="row center pad-50 section scrollspy" key={book.key} id="book{ key }">
								<div className="col l6 m6 s6">
									<img src={book.image} className="responsive-img" alt={book.name} />
								</div>
								<div className="col l6 m6 s6 left-align">
									<h3>{book.name}</h3>
									<p>{book.description}</p>
									<Link className={book.button} to={book.link}>More</Link>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		user: state.auth.user,
		loggedIn: state.auth.loggedIn
	}
}

export default connect(mapStateToProps)(Books)