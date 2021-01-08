var enemyObj = function(){
	this.x = [];
	this.y = [];
	this.width = 200;
	this.height = 200;

	this.allType = ['A', 'B', 'C', 'D'];

	//this.type[] = this.allType[];

	this.pic = [];
	//this.pic.src = './images/enemyA.png';

	this.alive = [];
	this.spd = 4;
	this.speed = [];
	this.moveDis = [];

	this.i = [];
	this.nums = 10;
	this.liveValue = 2;
	this.live = [];
	this.dead_i = [];
}

enemyObj.prototype.init = function() {	
    for(i=0; i<this.nums; i++){
    	this.pic[i] = new Image();
    	if(i <1){
    		this.speed[i] = this.spd*Math.random()*0.5;
	    	this.born(i);
	    }
    }	
};

enemyObj.prototype.draw = function() {	
    ctx1.save();
    for(i=0; i<this.nums; i++){
		if(this.alive[i]){
			console.log(i, this.x[i]);
	    	ctx1.drawImage(this.pic[i], this.x[i], this.y[i], this.width, this.height);
	    }
	}
  
	ctx1.restore();
};

enemyObj.prototype.born = function(i){
	this.x[i] = Math.round(Math.random()*(canWidth-this.width));
	this.y[i] = 20;
	this.live[i] = this.liveValue;
	this.alive[i] = true;
	this.dead_i[i] = 0;
	this.pic[i].src = './images/enemyA.png';
	//console.log(character_x);
	//console.log(this);
}

enemyObj.prototype.dead = function(i){
	if(this.dead_i[i] >= 11){
		this.dead_i[i] = 0;
		this.alive[i] = false;
	}else{
		dead_i = this.dead_i[i]++;
		this.bom(i, Math.round(dead_i/3));
	}	

	//this.alive[i] = false;
}

enemyObj.prototype.bom = function(i, dead_i){
	this.pic[i].src = './images/characterDeadEffect.png';

	ctx1.save();
	if(this.alive[i]){
    	ctx1.drawImage(this.pic[i], dead_i*205, 0, 205, 205, this.x+this.width/2-102, this.y+this.height/2-102, 205, 205);	
    }
	ctx1.restore();
}

enemyObj.prototype.move = function(){
	position = [];
	for(i=0; i<this.nums; i++){
		if(this.alive[i]){
			var time = new Date().getTime();
			dischange = Math.round(time/1000);
			//console.log(dischange);
			if(typeof this.moveDis[i] == 'undefined' || dischange%5==1){
				random = Math.random();
				this.moveDis[i] = (random-0.5)*this.spd*0.8
			} 
			//console.log(this.x[i]);
			if(this.x[i]<10){
				dis = Math.abs(this.moveDis[i]);
			}else if(canWidth-this.x[i]-this.width<10){
				dis = 0-Math.abs(this.moveDis[i]);
			}else{
				dis = this.moveDis[i];
			}
			//console.log(dis);
			this.x[i] += dis;
			this.y[i] += this.speed[i];

			//enemyFire(i, loop_i, this.x[i], this.y[i], this.height, enemyBullet);
			position.push([this.x[i]+this.width/2, this.y[i]+this.height]);
		}
	}
	return position;
}

//检测战机是否死亡  是否新生成
enemyObj.prototype.isAlive = function(){
	dath = [];
	for(j=0; j<this.nums; j++){
		if(this.alive[j]){
			if(this.x[j]>canWidth || this.x[j]<0){
				this.alive[j] == false;
				dath.push(j);
			}
			if(this.y[j]>canHeight || this.y[j]<0){
				this.alive[j] == false;
				dath.push(j);
			}

			if(this.live[j] <= 0){
				this.dead(j);
			}
		}else{
			//this.i[] = j;
			dath.push(j);
		}
	}
	console.log(dath)
	if(dath.length > 6){
		l = dath[0];
		this.born(l);
	}
}


