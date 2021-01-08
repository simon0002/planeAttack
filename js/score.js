var scoreObj = function(){
	this.score = 0;
}
scoreObj.prototype.add = function(value){
	this.score += value;
}
scoreObj.prototype.draw = function(){
	var w = can1.width;
	var h = can1.height;
    
    ctx1.fillStyle = "white";
    ctx1.fillText("score "+this.score, w*0.1, h*0.1);
}
