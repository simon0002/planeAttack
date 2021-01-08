var bulletObj = function(){
	this.x = [];
	this.y = [];
	this.width = 20;
	this.height = 50;
	this.pic = new Image();
	this.pic.src = './images/characterBullet.png';
	this.nums = 100;
	this.dead = [];
	this.undead = [];
	// this.character_x = character_x;
	// this.character_y = character_y;
	// this.character_height = character_height;
	this.alive = [];
	this.spd = 10;
}

bulletObj.prototype.draw = function() {	
    ctx1.save();
   
    for(i=0; i<this.undead.length; i++){
		if(this.alive[this.undead[i]]){
	    	ctx1.drawImage(this.pic, this.x[i]-this.width/2, this.y[i]-this.height/2, this.width, this.height);
		    	//ctx1.drawImage(this.pic[], this.x2-this.width/2, this.y-this.height/2, this.width, this.height);	
		}
	}
  
	ctx1.restore();
};

bulletObj.prototype.born = function(loop_i, character_x, character_y, character_height){
	if(loop_i % 20 == 0){
		i = this.dead[0];
		this.x[i] = character_x+50;
		this.y[i]  = character_y-character_height/2;
		this.alive[i] = true;
		//console.log(character_x);
		//console.log(this);

		j = this.dead[1];
		this.x[j] = character_x-50;
		this.y[j]  = character_y-character_height/2;
		this.alive[j] = true;
	}	
}
bulletObj.prototype.dead = function(i){
	this.alive[i] = false;
}

//战机跟随鼠标
bulletObj.prototype.fire = function(){
	for(i=0; i<this.undead.length; i++){
		if(this.alive[this.undead[i]]){
			this.y[i] -= this.spd;
		}
	}
}

bulletObj.prototype.isAlive = function(){
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
