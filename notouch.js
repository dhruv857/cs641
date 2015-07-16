alert('notouch');

var canvas=document.getElementById("draw");
var context=canvas.getContext('2d');
var colo="black";
var s=null;



canvas.addEventListener("mousedown",function(event){
  var startX=event.pageX;
  var startY=event.pageY;

  context.beginPath();
  event.preventDefault();
  canvas.addEventListener("mousemove",startDraw,false);

});
canvas.addEventListener("mouseup",endDraw,false);


function startDraw(event){
  context.lineWidth=inaa;
  context.strokeStyle=colo;

    context.lineTo(event.pageX-canvas.offsetLeft,event.pageY-canvas.offsetTop);
    context.stroke();

}

function endDraw(event){
  canvas.removeEventListener("mousemove",startDraw,false);
}


document.getElementById('clear').addEventListener("click",clear,false);

function clear()
{
  context.clearRect(0,0,canvas.width,canvas.height);
}

document.getElementById('erase').addEventListener("click",erasee,false);

function erasee()
{
  colo="white";
  inaa=8;

}

document.getElementById('penn').addEventListener("click",pen,false);

function pen()
{
  colo="black";
  inaa=2;

}

document.getElementById('red').addEventListener("click",red,false);

function red()
{
  colo="red";


}

document.getElementById('blue').addEventListener("click",blue,false);

function blue()
{
  colo="blue";


}

document.getElementById('green').addEventListener("click",green,false);

function green()
{
  colo="green";


}

document.getElementById('black').addEventListener("click",black,false);

function black()
{
  colo="black";


}


document.getElementById('gray').addEventListener("click",gray,false);

function gray()
{
  colo="gray";


}

document.getElementById('increase').addEventListener("click",incc,false);

function incc()
{
  inaa++;


}

document.getElementById('decrease').addEventListener("click",decc,false);

function decc()
{
  inaa=inaa-1;


}
