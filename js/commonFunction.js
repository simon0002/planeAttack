// 兼容性处理
window.requestAnimFrame = (function() {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback, element) {
      window.setTimeout(callback, 1000 / 20)
    }
  )
})();

function calLength2(x1, y1, x2, y2){
    return Math.pow(x1-x2, 2) + Math.pow(y1-y2, 2);
}
function lerpAngle(a, b, t){
    var d = b - a;
    if(d > Math.PI) d = d - 2 * Math.PI;
    if(d < -Math.PI) d = d + 2 * Math.PI;
    return a + d * t;
}
function lerpDistance(aim, cur, ra){
    var delta = cur - aim;
    return aim + delta * ra;
}
