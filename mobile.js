alert('touch');
var canvas=document.getElementById("draw");
var context=canvas.getContext('2d');
colo="black"
var s=null;



canvas.addEventListener("touchstart",function(event){
  var startX=event.touches[0].pageX;
  var startY=event.touches[0].pageY;

  context.beginPath();
  event.preventDefault();
  canvas.addEventListener("touchmove",startDraw,false);

});
canvas.addEventListener("touchend",endDraw,false);


function startDraw(event){
  context.lineWidth=2;
  context.strokeStyle=colo;
  if(s!=null){
    context.moveTo(s.x,s.y);
    context.lineTo(event.touches[0].pageX-this.offsetLeft,event.touches[0].pageY-this.offsetTop);
    context.stroke();
  }
s={x:event.touches[0].pageX-this.offsetLeft,y:event.touches[0].pageY-this.offsetTop};

}

function endDraw(event){
  canvas.removeEventListener("touchmove",startDraw,false);
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
