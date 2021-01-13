// Constants
const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3;

function setup() {
  createCanvas(400, 400);
  c1 = color(193, 57, 174);
  c2 = color(103, 141, 222);
  c3 = color(103,222,191);
}

function draw() {
  //background(51);
  push();
  translate( width, 0);
  rotate((HALF_PI)/2);
  grdDiamond(0, 0, height * 1.42, c1, c2, c3);
  pop(0);   
  
  push();
  translate( width*0.5, -height*0.21);
  rotate((HALF_PI)/2);
  grdCircle(width*0.5, height*0.5, width * 0.77, c1, c2, c3);
  pop();
   
   
  setGradient( width*0.49, height*0.05, width*0.02, height*0.9, c3, c2, c1, Y_AXIS);
  
  setGradient( width*0.39, height*0.05, width*0.02, height*0.9, c3, c2, c1, Y_AXIS);
  setGradient( width*0.29, height*0.05, width*0.02, height*0.9, c3, c2, c1, Y_AXIS);
  setGradient( width*0.19, height*0.05, width*0.02, height*0.9, c3, c2, c1, Y_AXIS);


  setGradient( width*0.59, height*0.05, width*0.02, height*0.9, c3, c2, c1, Y_AXIS);
  setGradient( width*0.69, height*0.05, width*0.02, height*0.9, c3, c2, c1, Y_AXIS);
  setGradient( width*0.79, height*0.05, width*0.02, height*0.9, c3, c2, c1, Y_AXIS);

  
  save("20210113.png");
  noLoop();
  
  
}

function setGradient(x, y, w, h, c1, c2, c3, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, (y + h) - ((h/2)), 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (y + h) - ((h/2)) ,  y + h , 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      stroke(c);
      line(x, i, x + w, i);
      
       if ( i <= (y + h) - ((h/2))){
        stroke(c);
        line(x, i, x + w, i);
      }else{
        stroke(p);
        line(x, i, x + w, i);
      }
      
      
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}

function grdDiamond(x, y, h, c1, c2, c3){
  for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, (y + h)/2, 0, 1);
      let c = lerpColor(c1, c2, inter);
      
      let inter02 = map(i, (y + h)/2 ,  y + h , 0, 1);
      let p = lerpColor(c2, c3, inter02);
      
      if ( i <= ((y + h)/2)){
        stroke(c);
        line( (x * h) - (i), i, (x * h) + i, i);
      }else{
        stroke(p);
        line( (x - h) + i , i, (x + h) - i , i);
      }
    }
}

function grdCircle(x, y, d, c1, c2, c3) {
 let c = 100;
 for (let i=0; i<c; i++) {
   let col = lerpColor(c1, c2, (i/c)*2 );
   let col02 = lerpColor(c2, c3, ((i - (c/2))/(c/2)));
   let a = lerp(PI, 0, i/c);
   
   if ( i <= c/2){
      fill(col);
      noStroke();
      arc(x, y, d, d, -a, a, CHORD);
    }else{
      fill(col02);
      noStroke();
      arc(x, y, d, d, -a, a, CHORD);
    }   

 }
}
