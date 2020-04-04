function setup() { // !!! replace void !!!
  createCanvas(400, 400); // !!!replace size(width, height); !!!!
}

function draw() { // !!! replace void !!!
	fill(255);
	circle(width/2,width/2,width+200);
  var cx = map(mouseX, 0, width, 0, 255); // !!! replace float !!!
  var cy = map(mouseY, 0, height, 0, 255); // !!! replace float !!!
  var nsize = width/8+cos(mouseY*PI/180)*width/16; // !!! replace float !!!
  var mousesize = 10;
  var Alpha = 40;
  // 基本型
  fill(cx,cy,150,50);
  circle(mouseX,mouseY,nsize);

  ellipse(width/2+cos(TWO_PI*mouseY/height)*width/3,height/2+sin(TWO_PI*mouseY/height)*height/3,cos(TWO_PI*mouseY/height)*width/3,sin(TWO_PI*mouseY/height)*height/3);
}