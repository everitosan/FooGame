import Player from './characters/player';
import Enemy from './characters/enemy';
var $ = require('jquery');

var width= window.innerWidth,
		height=window.innerHeight;

$(document).on('ready', intiCanvas);

function intiCanvas( ) {
	var $canvas = $('#canvas');
	var ctx = $canvas[0].getContext('2d');
	$canvas.css('width', window.innerWidth)
					.css('height', window.innerHeight)
					.css('background', '#333');
}
