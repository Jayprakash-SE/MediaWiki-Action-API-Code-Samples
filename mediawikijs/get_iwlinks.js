// This file is autogenerated. See modules.json and autogenerator.py for details

/*
	get_iwlinks.js

	MediaWiki API Demos
	Demo of `Iwlinks` module: Get the interwiki links from a given page.

	MIT License
*/

var params = {
		action: 'query',
		format: 'json',
		prop: 'iwlinks',
		titles: 'Albert Einstein'
	},
	api = new mw.Api();

api.get( params ).done( function ( data ) {
	var pages = data.query.pages,
		p;
	for ( p in pages ) {
		console.log( pages[ p ].iwlinks );
	}
} );