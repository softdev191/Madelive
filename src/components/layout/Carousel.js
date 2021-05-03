import React from 'react';
import { Link } from 'react-router-dom';

const Carousel = ( page ) => {
	// Get the location of the book
	var button = true;
	if( page.name === 'books' ){
		var banners = global.madelive.banners[ page.name ][ page.props.match.params.seriesName ];
	} else if ( page.name === 'book' ){
		var banners = [global.madelive.banners[ page.name ][ page.props.match.params.bookName ]];
		var button = false;
	} else {
		var banners = global.madelive.banners[ page.name ];
	}
	return (
		<div className="carousel carousel-slider" id={ page.props.location.key } >
		    { banners.map((item, key) => {
		    	item.wrap = "carousel-item white-text " + item.class;
		    	item.button = "btn waves-effect " + item.class;
		    	item.key = page.name + key;
		    	return(
				    <div className={ item.wrap } id={ item.name } key={ item.key }>
				    	<div className="container">
				    		<div className="row">
				    			<div className="col s6">
							      <h2>{ item.name }</h2>
							      <p className="white-text">{ item.description }</p>
							      { button &&
							     	 <Link className={ item.button } to={ item.link }>More</Link>
							      }
							    </div>
				    			<div className="col s6 valign-wrapper">
				    				<img src={ item.image } className="responsive-img" alt={ item.name } />
							    </div>
					      	</div>
				      	</div>
				    </div>
				    )
		    	})
		   	}
		</div>
	)
}

export default Carousel;