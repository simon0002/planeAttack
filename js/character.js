var characterObj = function(){
	this.x = 0;
	this.y = 0;
	this.width = 180;
	this.height = 180;
	this.pic = new Image();
	this.pic.src = './images/character.png';
	//this.nums = [];
	//this.i = 10;
	this.alive = false;
	this.spd = 0.2;
	this.liveValue = 6;
	this.live = 0;
	this.dead_i = 0;
}
characterObj.prototype.init = function(){
	this.born;
}

characterObj.prototype.draw = function() {	
    ctx1.save();
   
	if(this.alive && this.live>0){
    	ctx1.drawImage(this.pic, this.x-this.width/2, this.y-this.height/2, this.width, this.height);	
    }
  
	ctx1.restore();
};

characterObj.prototype.born = function(){
	//this.nums[i] = Math.floor(Math.random()*5) + 1;
	this.x = mx;
	this.y = canHeight-160;
	this.live = this.liveValue;
	this.alive = true;
	this.pic.src = './images/character.png';
}

characterObj.prototype.dead = function(){
	//console.log(this.dead_i);
	if(this.dead_i >= 11){
		this.dead_i = 0;
		this.alive = false;
	}else{
		dead_i = this.dead_i++;
		this.bom(Math.round(dead_i/3));
	}	
}

characterObj.prototype.bom = function(dead_i){
	this.pic.src = './images/characterDeadEffect.png';

	ctx1.save();
	if(this.alive){
    	ctx1.drawImage(this.pic, dead_i*205, 0, 205, 205, this.x-this.width/2, this.y-this.height/2, 205, 205);	
    }
	ctx1.restore();
}

characterObj.prototype.getPosition = function(){
	return [this.x, this.y, this.height];
}

//检测战机是否死亡
characterObj.prototype.isAlive = function(){
	if(!this.alive){
		this.born();
		return;
	}else{
		if(this.live <= 0){
			this.dead();
		}
	}
}

//战机跟随鼠标
function characterFollow(){
	if(character.alive){
		//var dx = mousex - character.x + character.width/2;
		//var dy = mousey - character.y + character.height/2;
		var dx = mousex - character.x ;
		var dy = mousey - character.y ;
		//console.log(l);
		if(Math.abs(dx) > 3){
			character.x += character.spd * dx;
		}
		if(Math.abs(dy) > 3){
			character.y += character.spd * dy;
		}
	}

	//console.log(mousex);
	//console.log(character.x-character.width/2);
}
