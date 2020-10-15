
let circles = [circle01, circle02, circle03, circle04, circle05, circle06, circle07, circle08, circle09, circle10, circle11]
let circlePosition = [];

let circles01 = [circle12, circle13, circle14, circle15]
let circlePosition01 = [];

function setup() {
  createCanvas(600, 600);


 for (let i = 0; i < circles.length; i++){
 circlePosition[i] = new Circle(circles[i]);
}

for (let i = 0; i < circles01.length; i++){
circlePosition01[i] = new Circle01(circles01[i]);
}

}

function draw() {
  background(0);
  rectMode(CENTER);


 for (i = 0; i < circles.length; i++){

   push();
   circlePosition[i].drawCircle();
   circlePosition[i].tracingLines();
   circlePosition[i].moveX();
   circlePosition[i].moveY();
   pop();

 }

 for (i = 0; i < circles01.length; i++){

   push();
   circlePosition01[i].drawCircle01();
   circlePosition01[i].tracingLines01();
   circlePosition01[i].moveX();
   circlePosition01[i].moveY();
   pop();

 }

}
