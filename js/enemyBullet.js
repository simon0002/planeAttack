var enemyBulletObj = function(){
	this.x = [];
	this.y = [];
	this.width = 15;
	this.height = 30;
	this.pic = new Image();
	this.pic.src = './images/characterBullet.png';
	this.nums = 150;
	this.dead = [];
	this.undead = [];
	// this.character_x = character_x;
	// this.character_y = character_y;
	// this.character_height = character_height;
	this.alive = [];
	this.spd = 5;
}

enemyBulletObj.prototype.draw = function() {	
    ctx1.save();
   
    for(i=0; i<this.undead.length; i++){
		if(this.alive[this.undead[i]]){
	    	ctx1.drawImage(this.pic, this.x[i]-this.width/2, this.y[i]-this.height/2, this.width, this.height);
		    	//ctx1.drawImage(this.pic[], this.x2-this.width/2, this.y-this.height/2, this.width, this.height);	
		}
	}
  
	ctx1.restore();
};

enemyBulletObj.prototype.born = function(loop_i, character_position){
	for(j=0; j<character_position.length; j++){
		if(loop_i % 40 == j){
			i = this.dead[j];
			this.x[i] = character_position[j][0];
			this.y[i]  = character_position[j][1];
			this.alive[i] = true;
			//console.log(character_position[j]);
			//console.log(this);
		}	
	}
	
}
enemyBulletObj.prototype.dead = function(i){
	this.alive[i] = false;
}

enemyBulletObj.prototype.fire = function(){
	for(i=0; i<this.undead.length; i++){
		if(this.alive[this.undead[i]]){
			this.y[i] += this.spd;
		}
	}
}

enemyBulletObj.prototype.isAlive = function(){
	dead = [];
	alive = [];
	for(i=0; i<this.nums; i++){
		if(this.alive[i]){
			if(this.y[i]>canHeight || this.y[i]<0){
				this.alive[i] == false;
				dead.push(i);
			}
			alive.push(i);
		}else{
			dead.push(i);
		}
	}

	this.dead = dead;
	this.undead = alive;
}
