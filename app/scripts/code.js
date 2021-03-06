import Player from './characters/player';
import Enemy from './characters/enemy';
import Enemy2 from './characters/enemy2';
import Scene from './env/scene';
import Meteor1 from './env/meteor1';
import Meteor2 from './env/meteor2';

let $ = require('jquery');
let PreloadJS = require('PreloadJS');

let $canvas,
		MySC,
		P1,
		Enemies = [],
		Obstacles = [];

let preloader,
		manifest = [
			{src:'../img/sprites.png',
				id:'sprites'
			},
			{src:'../img/shot.gif',
				id:'shot'
			},
			{src:'../img/sheet.png',
				id:'sheet'
			}];

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
	preloader = new createjs.LoadQueue(true);
	preloader.loadManifest(manifest);
	preloader.on("complete", loadComplete);
}

function loadComplete (event) {
	let sheet = new Image();
	sheet.src = "../img/sheet.png";
	let sprite = new Image();
	sprite.src = "../img/sprites.png";

	MySC = new Scene(sheet);
	P1  = new Player(width/2, height*.8, sprite);

	createEnemies(5, sprite);
	createObstacles(5, sprite);
	MySC.events(P1);
	render();
}

//Loop
function render() {
	MySC.start(ctx);
	MySC.drawObstacles(Obstacles, ctx);
	MySC.drawEmenies(Enemies, ctx);
	P1.draw(ctx);
	MySC.bulletEnemyCollision(P1.bullets, Enemies);
	MySC.bulletObstacleCollision(P1.bullets, Obstacles);
	MySC.obstacleCollision(P1, Obstacles);
	(MySC.continue)? requestAnimationFrame(render):MySC.end(ctx, Enemies.length);
}

function createEnemies(numberOfEnemies, sprite) {
	let dir = 0;
	let spaceW = (width/numberOfEnemies);
	let Rx = spaceW*.5;

	for(let i = 0; i<numberOfEnemies; i++){
		let Ry=Math.floor(Math.random() * height*.3) + 10 ;
		let newEnemy = (dir==0)?new Enemy(Rx, Ry, dir, sprite):new Enemy2(Rx, Ry, dir, sprite);
		Enemies.push(newEnemy);
		Rx = Rx + spaceW;
		dir = !dir; //works as a toggle for the initial direction of movement for every enemy
	};
}

function createObstacles(numberOfObstacles, sprite) {
	for(let i = 0; i<numberOfObstacles; i++){
		let Rx=Math.floor(Math.random() * (width*.8 - 10 + 1)) + 10 ;
		let Ry=Math.floor(Math.random() * (height*.3 + 5 * height + 1)) + (-5 * height) ;
		let newMeteor = Math.random() < 0.5 ? new Meteor2(Rx, Ry, sprite): new Meteor1(Rx, Ry, sprite);
		Obstacles.push(newMeteor);
	};
}
