
import React from 'react';
import config from '../config/madelive.json';
import InApp from 'detect-inapp';

class madelive extends React.Component {

	constructor() {

		const inapp = new InApp(navigator.userAgent || navigator.vendor || window.opera)
		
		config.isapp = inapp.ua.includes("iOS Native App") || inapp.ua.includes("Android Native App");

		config.style = '';

		config.banners = {
						"home":[],
						"news":[],
						"series":[],
						"books":{},
						"book":{}
						}

		// This will generate
		global.sitemap = [];

		// Get the static pages
		config.pages.forEach(function( page ){
			global.sitemap.push( page );
		});

		// Unique sitemap
		var sitemap = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

		// Loop through the series
		config.series.map((series, i) => {

			config.series[i].name = series.name.replace(/[\W_0-9]+/g,"");
			config.series[i].class = series.name.replace(/[\W_0-9]+/g,"");
			config.series[i].link = '/series/' + series.name.replace(" ","-");
			config.series[i].image = '/images/series/' + series.name.replace(/[\W_0-9]+/g,"") + '.png';
			config.series[i].qr = '/images/qr/' + series.name.replace(/[\W_0-9]+/g,"") + '.png';
			config.style += '.' + config.series[i].name + ' { background-color: ' + series.style.normal + ';} .' + config.series[i].name + '.light { background-color: ' + series.style.light + ';}\r\n.' + config.series[i].name + '.dark { background-color: ' + series.style.dark + ';}\r\n.' + config.series[i].name + '.speech-bubble:after { border-top-color: ' + series.style.normal + '; }\r\n'; 

			// Assign the series banners to the banners object
			["home","news","series"].map((key, index) => {

				// These are the base banners
				config.banners[ key ].push({
											"name": config.series[i].name,
											"class": config.series[i].class,
											"description": config.series[i].description,
											"link": '/books/' + series.name.replace(" ","-"),
											"image": config.series[i].image,
				 							"qr": config.series[i].qr
											});

				// Add this to the sitemap
				global.sitemap.push( '/books/' + series.name.replace(" ","-") );

				return;
			
			});

			config.series[i].books.map((book, j) => {

				// Make this book and array
				if( typeof config.banners.books[ config.series[i].name ] == "undefined" ) config.banners.books[ config.series[i].name ] = [];

				// These are the base banners
				config.banners.books[ config.series[i].name ].push({
																"name": book.name,
																"class": config.series[i].class,
																"description": book.description,
																"link": '/book/' + series.name.replace(/['\W_']/g,"") + '/' + book.name.replace(/['\W_']/g,"-"),
																"image": '/images/series/' + series.name.replace(/[\W_0-9]+/g,"") + '/' + (config.banners.books[ config.series[i].name ].length+1) + '.png',
																"qr": '/images/qr/' + series.name.replace(/[\W_0-9]+/g,"") + '.png'
																});

				// Add this to the book array
				config.banners.book[ book.name.replace(/['\W_']/g,"-") ] = {
													"name": book.name,
													"class": config.series[i].class,
													"description": book.description,
													"link": '/book/' + series.name.replace(/['\W_']/g,"") + '/' + book.name.replace(/['\W_']/g,""),
													"image": '/images/series/' + series.name.replace(/[\W_0-9]+/g,"") + '/' + (config.banners.books[ config.series[i].name ].length+1) + '.png',
													"qr": '/images/qr/' + series.name.replace(/[\W_0-9]+/g,"") + '.png'
													};

				// Add this to the sitemap
				global.sitemap.push( '/book/' + series.name.replace(/['\W_']/g,"") + '/' + book.name.replace(/['\W_']/g,"-") );

				return;

			})

			return;

		});

		//console.log(config.banners);

		// Globally accessible everywhere
		global.madelive = config;

		// console.log( global.sitemap );

		// Make it into something
		var sitemap = '';
		global.sitemap.filter((v, i, a) => a.indexOf(v) === i).map((link) => { sitemap += '<url><loc>' +'https://made.live/' + link + '</loc></url>' });

		//console.log(sitemap);

		return config;
  }

}

export default new madelive();