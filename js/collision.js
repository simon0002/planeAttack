/*
 * 碰撞检测
 */


function characterBulletColl(){
	for(var i=0; i<enemyBullet.nums; i++){
		if(enemyBullet.alive[i]){
			var l = calLength2(enemyBullet.x[i]+enemyBullet.width/2, enemyBullet.y[i]+enemyBullet.height/2, character.x, character.y);
			if(l < 28900){
				character.live--;
				enemyBullet.alive[i] = false;
			}
		}
	}
	for(var i=0; i<bullet.nums; i++){
		if(bullet.alive[i]){
			for(var j=0; j<enemy.nums; j++){
				if(enemy.alive[j]){
					var l = calLength2(bullet.x[i]+bullet.width/2, bullet.y[i]+bullet.height/2, enemy.x[j]+enemy.width/2, enemy.y[j]+enemy.height/2);
					if(l < 36100){
						enemy.live[i]--;
						bullet.alive[i] = false;
						score.add(3);
					}
				}
			}
		}
	}
}


