canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var mouseEvent="empty";
var ultima_posicion_X,ultima_posicion_Y;
color = "blue";
Grosor=2;




 canvas.addEventListener("mousedown" , my_mousedown); 
  function my_mousedown(e){
    color = document.getElementById("color").value;
    Grosor=document.getElementById("grosor").value;
    mouseEvent="mouseDown";
  }
  canvas.addEventListener("mousemove" , my_mousemove);
  
  function my_mousemove(e){
    mouse_posicion_actual_x = e.clientX -canvas.offsetLeft;
    mouse_posicion_actual_y = e.clientY -canvas.offsetTop;
    if(mouseEvent=="mouseDown"){
      ctx.beginPath();
      ctx.strokeStyle = color;
      ctx.lineWidth=Grosor;
      ctx.moveTo(ultima_posicion_X,ultima_posicion_Y);
      ctx.lineTo(mouse_posicion_actual_x,mouse_posicion_actual_y);
      ctx.stroke();
    }
    ultima_posicion_X=mouse_posicion_actual_x;
    ultima_posicion_Y=mouse_posicion_actual_y;
  }
  canvas.addEventListener("mouseup" , my_mouseup);
  function my_mouseup(e){
    mouseEvent="mouseUp";
  }
  canvas.addEventListener("mouseleave" , my_mouseleave);
  function my_mouseleave(e){
    mouseEvent="mouseleave";
  }

  function limpiar(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
  }