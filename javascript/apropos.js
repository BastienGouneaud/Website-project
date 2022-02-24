function bezier(){
  var canvas=document.getElementById("canvas");
  var context=canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.beginPath();
  context.strokeStyle="red";
  context.moveTo(0, 300);
  context.bezierCurveTo(0, 200, 200, 150, 750, 75);
  context.stroke();
}
