import Player from './characters/player';
import Enemy from './characters/enemy';
import Scene from './env/scene';
let $ = require('jquery');

let MySC, P1;

let width= window.innerWidth,
		height=window.innerHeight,
		ctx;

$(document).on('ready', intiCanvas);

function intiCanvas( ) {
	let $canvas = $('#canvas');
	ctx = $canvas[0].getContext('2d');
	$canvas[0].width = width;
	$canvas[0].height = height;

	initScene();
}

function initScene() {
	let sheet = new Image();
	sheet.src = "../img/sheet.png";
	sheet.onload = function() {
		MySC = new Scene(sheet, ctx);
		P1  = new Player(width/2, height/2, ctx);
		events();
		render();
	};
}

function render() {
	MySC.start();
	P1.draw();
	requestAnimationFrame(render);
}

function events () {
	$(window).on('keydown', function(e){
		if(e.keyCode === 37 || e.keyCode === 65) { //Move to left
			P1.moveLeft();
		}
		else if(e.keyCode === 39 || e.keyCode === 68) { //Move to right
			P1.moveRight();
		}
		else if(e.keyCode === 38 || e.keyCode === 87) { //Move up
			P1.moveUp();
		}
		else if(e.keyCode === 40 || e.keyCode === 83) { //Move Down
			P1.moveDown();
		}
		else if(e.keyCode === 32) { //Jump
			P1.jump();
		}
		else if(e.keyCode === 13) { //Fire
			P1.fire();
		}
	});
}
