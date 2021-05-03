import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

const Menu = (props) => {
	return (
		<div>
			<ul className="right">
				<li><NavLink to='/news' className="grey-text">Latest</NavLink></li>
				<li className='dropdown-trigger' data-target='dropDownSeries'><NavLink to='/series' className="grey-text">Series</NavLink></li>
				<li><NavLink to='/shorts' className="grey-text">Shorts</NavLink></li>
				<li><NavLink to='/videos' className="grey-text">Videos</NavLink></li>
				<li><NavLink to='/music' className="grey-text">Music</NavLink></li>
				<li><NavLink to='/playground' className="grey-text">Playground</NavLink></li>
				{ false && 
					<li className='dropdown-trigger' data-target='dropDownLanguage'><NavLink to='/#!' className="grey-text">Language</NavLink></li>
				}
				{
					props.loggedIn ? (
						<li><a class="waves-effect waves-light btn Chunk modal-trigger logout">Logout</a></li>
					) : (
						<li><a class="waves-effect waves-light btn Chunk modal-trigger" href="#modalLogin">Login</a></li>
					) 
				}
			</ul>
			<div id='dropDownLanguage' className='dropdown-content'>
				<ul>
					<li>
						<a href='/#!' className="black-text hoverable">
							<i className="material-icons"><img src="/images/flags/united-kingdom.png" className="responsive-img" alt="English" /></i>English
						</a>
					</li>
					<li>
						<a to='/#!' className="black-text hoverable">
							<i className="material-icons"><img src="/images/flags/france.png" className="responsive-img" alt="Française" /></i>Française
						</a>
					</li>
					<li>
						<a href='/#!' className="black-text hoverable">
							<i className="material-icons"><img src="/images/flags/spain.png" className="responsive-img" alt="Español" /></i>Español
						</a>
					</li>
					<li>
						<a href='/#!' className="black-text hoverable">
							<i className="material-icons"><img src="/images/flags/china.png" className="responsive-img" alt="中文" /></i>中文
						</a>
					</li>
					<li>
						<a href='/#!' className="black-text hoverable">
							<i className="material-icons"><img src="/images/flags/india.png" className="responsive-img" alt="भारतीय" /></i>भारतीय
						</a>
					</li>
				</ul>
			</div>
			<div id='dropDownSeries' className='dropdown-content'>
				<div className="row">
					<div className="col s6 m6 l6">
						<ul>
							<li>
								<NavLink to='/books/Me' className="Me white-text hoverable">
									<i className="material-icons"><img src="/images/tmp/Me.png" className="responsive-img" alt="Me" /></i>Me
								</NavLink>
							</li>
							<li>
								<NavLink to='/books/Chunk' className="Chunk white-text hoverable">
									<i className="material-icons"><img src="/images/tmp/Chunk.png" className="responsive-img" alt="Chunk" /></i>Chunk
								</NavLink>
							</li>
							<li>
								<NavLink to='/books/Avro' className="Avro white-text hoverable">
									<i className="material-icons"><img src="/images/tmp/Avro.png" className="responsive-img" alt="Avro" /></i>Avro
								</NavLink>
							</li>
							<li>
								<NavLink to='/books/Skipper' className="Skipper white-text hoverable">
									<i className="material-icons"><img src="/images/tmp/Skipper.png" className="responsive-img" alt="Skipper" /></i>Skipper
								</NavLink>
							</li>
							<li>
								<NavLink to='/books/Rosie' className="Rosie white-text hoverable">
									<i className="material-icons"><img src="/images/tmp/Rosie.png" className="responsive-img" alt="Route" /></i>Rosie
								</NavLink>
							</li>
							<li>
								<NavLink to='/books/Skyheart' className="Skyheart white-text hoverable">
									<i className="material-icons"><img src="/images/tmp/Skyheart.png" className="responsive-img" alt="Skyheart" /></i>Skyheart
								</NavLink>
							</li>
							
							<li>
								<NavLink to='/books/Keeper' className="Keeper white-text hoverable">
									<i className="material-icons"><img src="/images/tmp/Keeper.png" className="responsive-img" alt="Keepr" /></i>Keeper
								</NavLink>
							</li>
						</ul>
					</div>
					<div className="col s6 m6 l6">
						<ul>
							
							<li>
								<NavLink to='/books/Avro' className="Beeper white-text hoverable">
									<i className="material-icons"><img src="/images/tmp/Beeper.png" className="responsive-img" alt="Beeper" /></i>Beeper
								</NavLink>
							</li>
							
							<li>
								<NavLink to='/books/Bear' className="Bear white-text hoverable">
									<i className="material-icons"><img src="/images/tmp/Bear.png" className="responsive-img" alt="Bear" /></i>Bear
								</NavLink>
							</li>
							
							<li>
								<NavLink to='/books/Prof' className="Prof white-text hoverable">
									<i className="material-icons"><img src="/images/tmp/Avro.png" className="responsive-img" alt="Prof" /></i>Prof
								</NavLink>
							</li>
							<li>
								<NavLink to='/books/Mozart' className="Mozart white-text hoverable">
									<i className="material-icons"><img src="/images/tmp/Mozart.png" className="responsive-img" alt="Avro" /></i>Avro
								</NavLink>
							</li>
							<li>
								<NavLink to='/books/Bee' className="Bee white-text hoverable">
									<i className="material-icons"><img src="/images/tmp/Bee.png" className="responsive-img" alt="Bee" /></i>Bee
								</NavLink>
							</li>
							<li>
								<NavLink to='/books/Terra' className="Terra white-text hoverable">
									<i className="material-icons"><img src="/images/tmp/Terra.png" className="responsive-img" alt="Terra" /></i>Terra
								</NavLink>
							</li>
							<li>
								<NavLink to='/books/Koa' className="Koa white-text hoverable">
									<i className="material-icons"><img src="/images/tmp/Koa.png" className="responsive-img" alt="Koa" /></i>Koa
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return{
			user: state.auth.user,
			loggedIn: state.auth.loggedIn
		}
}

export default connect(mapStateToProps)(Menu)