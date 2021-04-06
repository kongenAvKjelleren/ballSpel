/*  
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/


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
      poeng++;
  }
  else if (avstandBall > ballStorleik/2 && xHastigheit != 0)
    xHastigheit -= 1;
    
}

function 
tekst()
{
  text("Poeng: " + poeng, windowWidth/2, 40);
}