import Player from './characters/player';
import Enemy from './characters/enemy';
import Enemy2 from './characters/enemy2';
import Scene from './env/scene';
let $ = require('jquery');

let $canvas,
		MySC,
		P1,
		Enemies = [];

let width= window.innerWidth,
		height=window.innerHeight,
		ctx;

$(document).on('ready', intiCanvas);
$(window).on('resize', resize);

function resize() {
	width= window.innerWidth;
	height=window.innerHeight;
	$canvas[0].width = width;
	$canvas[0].height = height;
}

function intiCanvas( ) {
	$canvas = $('#canvas');
	ctx = $canvas[0].getContext('2d');
	$canvas[0].width = width;
	$canvas[0].height = height;

	initScene();
}

//Set the enviroment for the level
function initScene() {
	let sheet = new Image();
	sheet.src = "../img/sheet.png";
	sheet.onload = function() {
		MySC = new Scene(sheet);
		P1  = new Player(width/2, height/2);
		createEnemies(5);
		MySC.events(P1);
		render();
	};
}

//Loop
function render() {
	MySC.start(ctx);
	MySC.drawEmenies(Enemies, ctx);
	P1.draw(ctx);
	MySC.bulletCollition(P1.bullets, Enemies);
	requestAnimationFrame(render);
}

function createEnemies(numberOfEnemies) {
	let dir = 0;
	let spaceW = (width/numberOfEnemies);
	let Rx = spaceW*.5;

	for(let i = 0; i<numberOfEnemies; i++){
		let Ry=Math.floor(Math.random() * height*.3) + 10 ;
		let newEnemy = (dir==0)?new Enemy(Rx, Ry, dir):new Enemy2(Rx, Ry, dir);
		Enemies.push(newEnemy);
		Rx = Rx + spaceW;
		dir = !dir; //works as a toggle for the initial direction of movement for every enemy
	};
}
