var bgObj = function(){
	this.pic = new Image();
	this.pic.src = './images/bg06.png'
}
bgObj.prototype.draw = function() {
	ctx2.drawImage(this.pic, 0, 0, canWidth, canHeight);
};