// This file is autogenerated. See modules.json and autogenerator.py for details

/*
	get_pagepropnames.js

	MediaWiki API Demos
	Demo of `Pagepropnames` module: List page property names on the given wiki.

	MIT License
*/

var params = {
		action: 'query',
		list: 'pagepropnames',
		format: 'json'
	},
	api = new mw.Api();

api.get( params ).done( function ( data ) {
	var pageprops = data.query.pagepropnames,
		p;
	for ( p in pageprops ) {
		console.log( pageprops[ p ].propname );
	}
} );