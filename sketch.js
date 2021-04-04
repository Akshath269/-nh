var ball, ballImage;
var bg, bgImg;
var hoop;
var platform;
var backboard;

function preload()
{
  bgImg=loadImage("background.jpg")
  ballImage=loadImage("basketball.png")
}

function setup() {
	createCanvas(displayWidth, displayHeight-150);

  bg= createSprite(width/2,height/2-50)
  bg.addImage(bgImg)
  bg.scale=2
  ball=createSprite(20,100,10,10)
  ball.addImage(ballImage)
  ball.scale=0.2
 
  hoop=createSprite(1250,350,50,10)
  hoop.setCollider("circle",0,0,30)
  hoop.debug=true
  backboard=createSprite(1300,240,130,100)
  

  
}


function draw() {  
  background(0);
  if(frameCount%100===0){

  
  createplatform()}


  drawSprites(); 
}




function createplatform() {
  platform=createSprite(15,100,100,10)
  platform.shapeColor="red"
platform.x=random(0,1000)
platform.y=random(575,700)
ball.x=platform.x
ball.y=platform.y
ball.collide(platform)

}