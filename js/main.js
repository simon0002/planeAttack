var cliw = document.body.clientWidth;
var clih = document.body.clientHeight;
console.log(cliw);

var can1, can2, ctx1, ctx1;

var canWidth;
var canHeight;

var lastTime;
var deltaTime;

var mx,my,bg,mousex,mousey;
var key,score,nums;

document.body.onload = game;

function game(){
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}

function init(){
	can1 = document.getElementById('canvas1');  //touch
	can2 = document.getElementById('canvas2');  //bg

	can1.width = cliw;
	can1.height = clih;
	can2.width = cliw;	
	can2.height = clih;

	ctx1 = can1.getContext('2d');
	ctx2 = can2.getContext('2d');

	ctx1.font = "70px Verdana";
    ctx1.textAlign = "center";

    canWidth = can1.width;
    canHeight = can1.height;

    mx = canWidth * 0.5;
    my = canHeight * 0.5;

    can1.addEventListener('touchstart', onMousedown, false);

	bg = new bgObj();
	// key = new keyObj();
	score = new scoreObj();
	
	character = new characterObj();
	character.init();
	
	//bullet = [];
	loop_i = 0;
	bullet_i = 0;
	bullet = new bulletObj();

	enemyBullet = new enemyBulletObj();

	enemy = new enemyObj();
	enemy.init();

 //    console.log(scorebg);

}
function gameloop(){
	window.requestAnimFrame(gameloop);
    var now = Date.now();
    deltaTime = now - lastTime;
    lastTime = now;    
	// drawBackground();
	ctx1.clearRect(0, 0, canWidth, canHeight);
	ctx2.clearRect(0, 0, canWidth, canHeight);
	bg.draw();
	// key.draw();
	score.draw();
	 //numsMonitor();
	character.isAlive();
	character.draw();
	characterPosition = character.getPosition();

	//bullet
	bullet.isAlive();
	bullet.born(loop_i, characterPosition[0], characterPosition[1], characterPosition[2]);
	bullet.fire();
	bullet.draw();
	
	//enemy
	enemy.isAlive();
	enemyPosition = enemy.move();
	enemy.draw();

	//enemyBullet
	enemyBullet.isAlive();
	enemyBullet.born(loop_i, enemyPosition);
	enemyBullet.fire();
	enemyBullet.draw();

	characterBulletColl();

	loop_i++;
	// console.log(canWidth);
}

function onMousedown(){
	console.log('onMousedown');
	document.ontouchmove = function(e){
		mousex = e.touches[0].clientX;
		mousey = e.touches[0].clientY;
		characterFollow();
	}

	document.ontouchend = function(){
		document.ontouchmove = null;
		document.ontouchend = null;
	}
	console.log('onMouseup');	
}
