import React from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu.js'

const Header = () => {
	return (
		<div>
			<nav id="nav" className="nav-wrapper white z-depth-1">
				<div className="container">
					<Link to='/' className="brand-logo black-text text-darken-2">
						<img src="/images/logo.png" className="logo" id="logo" alt="Made Live - Grow With Us"/>
					</Link>
					<Menu />
				</div>
			</nav>
		</div>
	)
}

export default Header;