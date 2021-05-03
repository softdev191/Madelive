import React from 'react';
import Carousel from '../layout/Carousel.js';

const Series = (props) => {
	return(
		<div>
			<Carousel {...props} />
			<div className="container center">
				<div className="row pad-20">
					<h4>Beautiful Books</h4>
				</div>
				<div className="row">
					<img src="/images/book.png" className="responsive-img" alt="Book"/>
				</div>
				<div className="row">
					<h4>Created For Gaurdians</h4>
				</div>
				<div className="row">
					<div className="col m8 left-align">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ex, malesuada sed felis ac, finibus egestas ex. Vivamus nec odio elementum tortor hendrerit pretium eget in risus. Proin in tortor tortor. Pellentesque eu venenatis sem. Nam feugiat eget dui ac scelerisque. Proin imperdiet justo eget ex faucibus sodales. Cras vitae est id metus feugiat consectetur non vel justo.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ex, malesuada sed felis ac, finibus egestas ex. Vivamus nec odio elementum tortor hendrerit pretium eget in risus. Proin in tortor tortor. Pellentesque eu venenatis sem. Nam feugiat eget dui ac scelerisque. Proin imperdiet justo eget ex faucibus sodales. Cras vitae est id metus feugiat consectetur non vel justo.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ex, malesuada sed felis ac, finibus egestas ex. Vivamus nec odio elementum tortor hendrerit pretium eget in risus. Proin in tortor tortor. Pellentesque eu venenatis sem. Nam feugiat eget dui ac scelerisque. Proin imperdiet justo eget ex faucibus sodales. Cras vitae est id metus feugiat consectetur non vel justo.</p>
					</div>
					<div className="col m4">
					  <div className="card">
					    <div className="card-image waves-effect waves-block waves-light">
					      <img className="activator" src="/images/qr/Keeper.png" alt="Keeper" />
					    </div>
					    <div className="card-content">
					      <span className="card-title activator grey-text text-darken-4">Keeper?<i className="material-icons right">more_vert</i></span>
					    </div>
					    <div className="card-reveal">
					      <span className="card-title grey-text text-darken-4 left-align">The Keeper<i className="material-icons right">close</i></span>
					      <p className="left-align">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ex, malesuada sed felis ac, finibus egestas ex. Vivamus nec odio elementum tortor hendrerit pretium eget in risus. Proin in tortor tortor. Pellentesque eu venenatis sem. Nam feugiat eget dui ac scelerisque. Proin imperdiet justo eget ex faucibus sodales. Cras vitae est id metus feugiat consectetur non vel justo.</p>
					    </div>
					  </div>
					</div>
				</div>
				<div className="row">
					<h4>By Experts</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ex, malesuada sed felis ac, finibus egestas ex.</p>
				</div>
			</div>
			<div className="row" style={{maxHeight:'500px',overflow:'hidden'}}>
				<img src="/images/professionals.png" className="responsive-img" alt="Professionals"/>
			</div>
			<div className="container center">				
				<div className="row pad-20">
					<h4>An Entire Learning Universe</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ex, malesuada sed felis ac, finibus egestas ex.</p>
				</div>
			</div>
			<div className="row">
				{ global.madelive.series.splice(0,6).map((item, key) => {
			    	const image = '/images/qr/' + item.name + '.png';
			    	return(
					    <div className="col s2" key={ key }>
							<img src={ image } className="responsive-img" alt={ item.name } />
					    </div>
					    )
			    	})
			   	}
			</div>
			<div className="container center">				
				<div className="row pad-20">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ex, malesuada sed felis ac, finibus egestas ex.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ex, malesuada sed felis ac, finibus egestas ex.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ex, malesuada sed felis ac, finibus egestas ex.</p>
				</div>
			</div>
			<div className="row">
				{ global.madelive.series.splice(0,6).map((item, key) => {
			    	const image = '/images/qr/' + item.name + '.png';
			    	return(
					    <div className="col s2" key={ key }>
							<img src={ image } className="responsive-img" alt={ item.name } />
					    </div>
					    )
			    	})
			   	}
			</div>
			<div className="container center">	
				<div className="row pad-20">
					<h4>You Can Follow On Your Device</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ex, malesuada sed felis ac, finibus egestas ex.</p>
				</div>
			</div>
			<div className="row" style={{maxHeight:'500px',overflow:'hidden'}}>
				<img src="/images/mobile.png" className="responsive-img" alt="Mobile Device"/>
			</div>
			<div className="container center">				
				<div className="row pad-20">
					<h4>Unlock New Stories</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ex, malesuada sed felis ac, finibus egestas ex.</p>
				</div>
			</div>
			<div className="container center">				
				<div className="row pad-20">
					<h4>Illustrate Your Children</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ex, malesuada sed felis ac, finibus egestas ex.</p>
				</div>
			</div>
			<div className="container center">				
				<div className="row pad-20">
					<h4>Track Their Progress</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ex, malesuada sed felis ac, finibus egestas ex.</p>
				</div>
			</div>
			<div className="container center">				
				<div className="row pad-20">
					<h4>Made.Safe&trade; Online Community</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tellus ex, malesuada sed felis ac, finibus egestas ex.</p>
				</div>
			</div>
		</div>
	)
}

export default Series;