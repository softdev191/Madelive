import React from 'react';
import Carousel from '../layout/Carousel.js';

const Home = (props) => {
	const qrs = global.madelive.series;
	return(
		<div>
			<Carousel {...props} />
			<div className="container center">
				<h1 className="pad-40">Beautiful Books</h1>
				<div className="row">
					<img src="/images/book.png" className="responsive-img" alt="Beautiful Books"/>
				</div>
				<div className="row">
					<h2>Created For Gaurdians</h2>
				</div>
				<div className="row">
					<div className="col m8 left-align">
						<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ex, malesuada sed felis ac, finibus egestas ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ex, malesuada sed felis ac, finibus egestas ex.</h3>
					</div>
					<div className="col m4">
					  <div className="card">
					    <div className="card-image waves-effect waves-block waves-light">
					      <img className="activator" src="/images/qr/Keeper.png" alt="Keeper" />
					    </div>
					    <div className="card-content">
					      <span className="card-title activator grey-text text-darken-4">QRCs<i className="material-icons right">more_vert</i></span>
					    </div>
					    <div className="card-reveal">
					      <span className="card-title grey-text text-darken-4 left-align">The Keeper<i className="material-icons right">close</i></span>
					      <p className="left-align">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ex, malesuada sed felis ac, finibus egestas ex. Vivamus nec odio elementum tortor hendrerit pretium eget in risus. Proin in tortor tortor. Pellentesque eu venenatis sem. Nam feugiat eget dui ac scelerisque. Proin imperdiet justo eget ex faucibus sodales. Cras vitae est id metus feugiat consectetur non vel justo.</p>
					    </div>
					  </div>
					</div>
				</div>
				<div className="row">
					<h2>By Experts</h2>
				</div>
			</div>
			<div className="row" style={{maxHeight:'500px',overflow:'hidden'}}>
				<img src="/images/professionals.png" className="responsive-img" alt="Professionals" />
			</div>
			<div className="container center">				
				<div className="row pad-20">
					<h2>An Entire Learning Universe</h2>
					<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ex, malesuada sed felis ac, finibus egestas ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ex, malesuada sed felis ac, finibus egestas ex.</h3>
				</div>
			</div>
			<div className="row">
				<div className="col s2"></div>
				{ qrs.splice(0,4).map((item, key) => {
			    	return(
					    <div className="col s2" key={ key }>
							<img src={ item.qr } className="responsive-img" alt={ item.name }/>
					    </div>
					    )
			    	})
			   	}
			   	<div className="col s2"></div>
			</div>
			<div className="row">
				<div className="col s2"></div>
				{ qrs.splice(0,4).map((item, key) => {
			    	return(
					    <div className="col s2" key={ key }>
							<img src={ item.qr } className="responsive-img" alt={ item.name }/>
					    </div>
					    )
			    	})
			   	}
			   	<div className="col s2"></div>
			</div>
			<div className="container center">	
				<div className="row pad-20">
					<h2>You Can Follow On Your Device</h2>
					<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ex, malesuada sed felis ac, finibus egestas ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ex, malesuada sed felis ac, finibus egestas ex.</h3>
				</div>
			</div>
			<div className="row" style={{maxHeight:'500px',overflow:'hidden'}}>
				<img src="/images/mobile.png" className="responsive-img" alt="Mobile Devices"/>
			</div>
			<div className="container center">				
				<div className="row pad-20">
					<h2>Unlock New Stories</h2>
					<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ex, malesuada sed felis ac, finibus egestas ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ex, malesuada sed felis ac, finibus egestas ex.</h3>
				</div>
			</div>
			<div className="row" style={{maxHeight:'500px',overflow:'hidden'}}>
				<img src="/images/kids.png" className="responsive-img" alt="Professionals" />
			</div>
			<div className="container center">				
				<div className="row pad-20">
					<h2>Illustrate Your Children</h2>
					<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ex, malesuada sed felis ac, finibus egestas ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ex, malesuada sed felis ac, finibus egestas ex.</h3>
				</div>
			</div>
			<div className="row" style={{maxHeight:'500px',overflow:'hidden'}}>
				<img src="/images/progress.png" className="responsive-img" alt="Mobile Devices"/>
			</div>
			<div className="container center">				
				<div className="row pad-20">
					<h2>Track Their Progress</h2>
					<h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ex, malesuada sed felis ac, finibus egestas ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ex, malesuada sed felis ac, finibus egestas ex.</h3>
				</div>
			</div>
		</div>
	)
}

export default Home;