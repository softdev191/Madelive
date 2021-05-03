import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import firebase from 'firebase/app'

import madelive from './components/madelive.js';

import RouteController from "./components/RouteController";

import Header from './components/layout/Header.js';
import Footer from './components/layout/Footer.js';

import Home from './components/page/Home.js';

import News from './components/page/News.js';
import Series from './components/page/Series.js';
import Books from './components/page/Books.js';
import Book from './components/page/Book.js';

import Shorts from './components/page/Shorts.js';
import Videos from './components/page/Videos.js';
import Music from './components/page/Music.js';
import Playground from './components/page/Playground.js';

import Terms from './components/page/Terms.js';
import Privacy from './components/page/Privacy.js';
import Cookies from './components/page/Cookies.js';

import Error from './components/page/Error.js';

import CookieConsent from "react-cookie-consent";

class App extends Component {

	render() {

		return (
			<BrowserRouter>
				<div className="App">
					<style>
						{global.madelive.style}
					</style>
					{!madelive.isapp ?
						<Header />
						: null
					}
					<RouteController>
						<Switch>
							<Route exact path='/' render={(props) => <Home props={props} name="home" />} />

							<Route exact path='/news' render={(props) => <News props={props} name="news" />} />
							<Route exact path='/series' render={(props) => <Series props={props} name="series" />} />
							<Route exact path='/books/:seriesName' render={(props) => <Books props={props} name="books" />} />
							<Route exact path='/book/:seriesName/:bookName' render={(props) => <Book props={props} name="book" />} />

							<Route exact path='/shorts' render={(props) => <Shorts props={props} name="shorts" />} />
							<Route exact path='/videos' render={(props) => <Videos props={props} name="videos" />} />
							<Route exact path='/music' render={(props) => <Music props={props} name="music" />} />
							<Route exact path='/playground' render={(props) => <Playground props={props} name="playground" />} />

							<Route exact path='/terms' render={(props) => <Terms props={props} name="terms" />} />
							<Route exact path='/privacy' render={(props) => <Privacy props={props} name="privacy" />} />
							<Route exact path='/cookies' render={(props) => <Cookies props={props} name="cookies" />} />

							<Route component={Error} />
						</Switch>
					</RouteController>
					{!global.madelive.isapp ?
						<div>
							<Footer />
							<CookieConsent
								disableStyles={false}
								disableButtonStyles={true}
								location="bottom"
								buttonClasses="btn teal lighten-5 black-text"
								contentClasses="text-capitalize"
								buttonText="I Understand"
								style={{ paddingRight: '10px' }}
							>
								This website uses cookies to enhance the user experience.{" "}
							</CookieConsent>
						</div>
						: null
					}
				</div>
				<div id="modalLogin" className="modal modal-fixed-footer">
					<div className="modal-content">
						<div className="row">
							<h4>Login</h4>
							<p>Made Live does not use, store, or share your personal information. Logins are used only to track your progress, share content with your family, and allow you to see the newest offering from Made Live.</p>
						</div>
						<div className="row">
							<div className="col s4 m4 l4 center-align"><img src="/images/login/facebook.png" className="responsive-img logo login" alt="Facebook" id="facebook" /></div>
							<div className="col s4 m4 l4 center-align"><img src="/images/login/twitter.png" className="responsive-img logo login" alt="Twitter" id="twitter" /></div>
							<div className="col s4 m4 l4 center-align"><img src="/images/login/google.png" className="responsive-img logo login" alt="Google" id="google" /></div>
						</div>
					</div>
					<div className="modal-footer">
						<a href="#!" className="modal-close waves-effect waves-green btn-flat">Cancel</a>
					</div>
				</div>
			</BrowserRouter>
		)
	}
}

export default App;