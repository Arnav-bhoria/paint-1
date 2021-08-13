var mouseEvent = "empty";
canvas=document.getElementById('myCanvas');
ctx= canvas.getContext("2d");
color="black"
width_of_line= 2;
canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){
    mouseEvent="mouseDown";
    color=document.getElementById("color").value;
   
    
   
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
    current_position_of_mouse_y = e.clientX - canvas.offsetTop;

    if (mouseEvent == "mouseDown") {
        console.log("Current position of x and y cordinates = ")
        console.log( "x =" + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= 3;
        ctx.moveTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.lineTo(last_x,last_y);
        ctx.stroke();
    }
    last_x=current_position_of_mouse_x;
    last_y=current_position_of_mouse_y;
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseEvent="mouseleave";
}