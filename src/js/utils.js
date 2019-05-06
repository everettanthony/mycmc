'use strict';

export function polyfillPromises( fn ) {
	const script = document.createElement( 'script' );
	script.src = 'promise.min.js';
	script.async = true;
	script.onload = fn;
	document.body.appendChild( script );
}

