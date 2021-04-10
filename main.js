canvas = document.getElementById("mycanvas");
ctx= canvas.getContext("2d");
mouse_event="empty";
var last_position_of_x,last_position_of_y ;
color="black";
width_of_line=1;

var width = s
canvas.addEventListener("mousedown", mousedown);

function mousedown(e) {
    mouse_event="mouseDown";
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width").value;
}
canvas.addEventListener("mouseup", mouseup);

function mouseup(e) {
    mouse_event="mouseUp";
}
canvas.addEventListener("mouseleave" , mouseleave);

function mouseleave(e) {
    mouse_event="mouseLeave";
}
canvas.addEventListener("mousemove", mousemove);

function mousemove(e) {
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientY - canvas.offsetTop;
    if(mouse_event=="mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("last postion of x and y= ");
        console.log("x=" + last_position_of_x+ "y=" + last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);
        console.log("current postion of x and y= ");
        console.log("x=" + current_position_of_mouse_x+ "y=" + current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }
    last_position_of_x = current_position_of_mouse_x;
    last_position_of_y = current_position_of_mouse_y;
}
function cleararea() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
}