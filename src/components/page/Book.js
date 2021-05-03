import React, { useEffect } from 'react';
import Carousel from '../layout/Carousel.js';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { subscriptionAction } from './../../store/actions/subscriptionAction'
import { getSubscriptionsAction } from './../../store/actions/getSubscriptionsAction'
import { unsubscriptionAction } from './../../store/actions/unsubscriptionAction'
const Books = (props) => {

	// get user subscriptions
	useEffect(() => {
		const { uid } = props
		props.getSubscriptionsAction({ uid })
	}, [])

	var series = global.madelive.series;
	series = series.filter(function (entry) {
		return entry.name === props.props.match.params.seriesName;
	})[0]
	var books = global.madelive.banners['books'][props.props.match.params.seriesName];

	function handleSubscriptionToggle(e) {
		const { checked } = e.target
		const { seriesName, bookName } = props.props.match.params
		if (checked) {
			const { uid } = props
			props.subscriptionBookAction({ seriesName, bookName, uid })
		}
		else {
			const { id } = getSubscription()[0]
			props.unsubscriptionAction({ id })
		}
	}

	const { seriesName, bookName } = props.props.match.params
	const { subscriptionsLoader } = props
	const getSubscription = () => props.subscriptions.filter(sub => (sub.seriesName === seriesName && sub.bookName === bookName && sub.uid === props.uid))
	return (
		<div>
			<Carousel {...props} />
			<div className="container">
				<div className="row pad-20 center">
					<h1>{series ? series.name : ''}</h1>
					<div className="grey-text">Books</div>
					<div className="card-panel hoverable pad-20">
						<p className="pad-20">{series ? series.description : ''}</p>
					</div>
					{
						// props.loggedIn ? (
						true ? (
							<div className="switch pad-20">
								<label>
									No
									<input
										type="checkbox"
										onClick={(e) => handleSubscriptionToggle(e)}
										checked={getSubscription().length}
									/>
									<span className="lever"></span>
									{subscriptionsLoader ? '...loading' : 'Subscribed'}
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
	const {
		subscription: {
			subscriptions, subscriptionsLoader
		},
		auth: { user }
	} = state
	return {
		user: state.auth.user,
		uid: user['uid'],
		loggedIn: state.auth.loggedIn,
		subscriptions, subscriptionsLoader
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		subscriptionBookAction: (payload) => dispatch(subscriptionAction(payload)),
		getSubscriptionsAction: (payload) => dispatch(getSubscriptionsAction(payload)),
		unsubscriptionAction: (payload) => dispatch(unsubscriptionAction(payload)),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Books)