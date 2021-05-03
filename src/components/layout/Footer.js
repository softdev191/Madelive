import React from 'react';
import { NavLink } from 'react-router-dom';

var date = new Date().getFullYear();

const Footer = () => {

	return(


		<footer className="page-footer grey lighten-5 z-depth-1">
          <div className="container">
            <div className="row">
              <div className="col l3 m3 s3">
                <h5 className="black-text margin-0">Current</h5>
                <ul>
                  <li><NavLink className="black-text" to="/news">Latest</NavLink></li>
                  <li><NavLink className="black-text" to="/series">Series</NavLink></li>
                  <li><NavLink className="black-text" to="/about">About</NavLink></li>
                  <li><NavLink className="black-text" to="/contact">Contact</NavLink></li>
                </ul>
              </div>
              <div className="col l3 m3 s3">
                <h5 className="black-text margin-0">International</h5>
                <ul>
                  <li><NavLink className="black-text" to="/news">Canada</NavLink></li>
                  <li><NavLink className="black-text" to="/series">United States</NavLink></li>
                  <li><NavLink className="black-text" to="/about">Scandanavia</NavLink></li>
                  <li><NavLink className="black-text" to="/contact">India</NavLink></li>
                </ul>
              </div>
              <div className="col l3 m3 s3">
                <h5 className="black-text margin-0">&nbsp;</h5>
                <ul>
                  <li><NavLink className="black-text" to="/news">Canada</NavLink></li>
                  <li><NavLink className="black-text" to="/series">Australia/New Zealand</NavLink></li>
                  <li><NavLink className="black-text" to="/about">Mexico</NavLink></li>
                  <li><NavLink className="black-text" to="/contact">Russia</NavLink></li>
                </ul>
              </div>
              <div className="col l3 m3 s3">
                <h5 className="black-text margin-0">&nbsp;</h5>
                <ul>
                  <li><NavLink className="black-text" to="/news">Canada</NavLink></li>
                  <li><NavLink className="black-text" to="/series">Germany</NavLink></li>
                  <li><NavLink className="black-text" to="/about">France</NavLink></li>
                  <li><NavLink className="black-text" to="/contact">England</NavLink></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright grey lighten-3 dark">
            <div className="container">
              <div className="row margin-0">
                <div className="col s6 m6 l6 black-text">
                    Copyright ©{ date } Made Live Inc. All rights reserved.
                </div>
                <div className="col s6 m6 l6">
                  <NavLink to="/privacy" className="black-text">Privacy Policy</NavLink>
                  <NavLink to="/terms" className="black-text">Terms of Use</NavLink>
                  <NavLink to="/cookies" className="black-text">Cookie Policy</NavLink>
                  <NavLink to="/disclaimer" className="black-text">Disclaimer</NavLink>
                </div>
              </div>
            </div>
          </div>
        </footer>
	)
}

export default Footer;