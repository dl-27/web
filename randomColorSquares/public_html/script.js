/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var canvas = document.getElementsByTagName('canvas');
var coord = canvas.offset();
var x1 = coord.left;
var y1 = coord.top;
var x2 = canvas.width();
var y2 = canvas.height();
var ctx = canvas.getContext("2d");
for (var i = 0; i < 1000; i++){
    var x0 = Math.floor((Math.random()*x2)+x1);     //x0
    var y0 = Math.floor((Math.random()*y2)+y1);     //y0 
    var w = Math.random()*(x2-x1-x0);               //width
    var h = Math.random()*(y2-y1-y0);               //height
    ctx.fillStyle = "#FF0000";
    ctx.fillRect(0,0,150,75);
}
