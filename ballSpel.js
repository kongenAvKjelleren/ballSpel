/* Variablar */

let ballX = 0;
let ballY = 0;
let ballStorleik = 100;
let xHastigheit = 2;
let xRetning = -1;
let poeng = 0;

function
setup() {
  createCanvas(windowWidth, windowHeight);
  ballX = windowWidth/2;
  ballY = windowHeight/2;
}

function
draw() {
  background(127);
  ball();
  tekst();
} 

function
ball() {
  ellipse(ballX, ballY, ballStorleik);
  
  ballX += xHastigheit * xRetning;
  if(ballX <= 0 - ballStorleik/2)
    ballX = windowWidth + ballStorleik/2;
  else if (ballX >= windowWidth + ballStorleik/2)
    ballX = 0 - ballStorleik/2;
  
}

function 
mouseReleased() 
{
  let avstandBall = dist(ballX, ballY, mouseX, mouseY);
  
  if(avstandBall < ballStorleik/2) {
    xRetning *= -1;
    xHastigheit += 1;
  }
  else if (avstandBall > ballStorleik/2 && xHastigheit != 0)
    xHastigheit -= 1;
    
}

function 
tekst()
{
  text("Poeng: " + poeng, windowWidth/2, 40);
}
