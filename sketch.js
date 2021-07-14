


function preload(){
  bg=loadImage("snow2.jpg")
  snow=loadImage("snow4.webp")
  snow2=loadImage("snow5.webp")
}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  snow=createSprite(100,100,50,50)
}

function draw() {
  background(bg);  
  drawSprites();
}