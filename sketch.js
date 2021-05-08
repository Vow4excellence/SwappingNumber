var a = prompt("enter a number");
var b = prompt("enter second number");

function setup() {
  //createCanvas(400, 400);
  var button1 = createButton("click here to swap");
  button1.mousePressed(swap);
}

function draw() {
  //background(220);
}

function swap(){
  [a,b] = [b,a];
  console.log("value of a after swapping", +a);
  console.log("value of b after swapping", +b);

}