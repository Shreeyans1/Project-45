
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var man,img;

var cloudImage;

var background1, background2, background3, background4, background0;

var plane;

var gameState = 2;

var obstacle, obstacleImg;

var start, startImg;

function preload()
{
  img = loadImage("skydiving-removebg-preview.png")
  
  cloudImage = loadImage("sky.jpg")
  
  planeImg = loadImage("aeroplanenobg.png")

  obstacleImg = loadImage("crownobg.png")

  startImg = loadImage("space to start.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  background1 = createSprite(400,-100,800,700);
  background1.addImage(cloudImage);
  
  plane = createSprite(400,10,800,700);
  plane.addImage(planeImg);
  plane.scale = 0.9;

  background1 = createSprite(400,350,800,700);
	background1.addImage(cloudImage);
	
  background2 = createSprite(400,800,800,700);
	background2.addImage(cloudImage);

  background3 = createSprite(400,1250,800,700);
  background3.addImage(cloudImage);
  
  background4 = createSprite(400,1700,800,700);
  background4.addImage(cloudImage);
  
  start = createSprite(400,150,20,50);
  start.addImage(startImg);
  start.scale = 0.5;
  start.visible = true

  man = createSprite(400,100,20,50);
  man.addImage(img);
  man.scale = 0.3;
  man.visible = false

  obstacle = createSprite(400,1000,20,50);
  obstacle.addImage(obstacleImg);
  obstacle.scale = 0.2;
  obstacle.visible = true


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);


 
  if(man.y>1400){
	man.y = 500
}

if(camera.y>1500){
  obstacle.x = random(100,600)
  obstacle.scale = random(0.1,0.3)
}

  man.velocityY = 0
  camera.position.y = man.y+150

  if(keyCode === 32){
    gameState = 1
  }

  if(gameState === 1){
    man.visible = true
    man.velocityY = 11
  }

  if(keyCode === RIGHT_ARROW){
	  man.velocityX = 7
  }
  if(keyCode === LEFT_ARROW){
	man.velocityX = -7
}

  if(man.x>800||man.x<0){
	  man.x = 400
	  man.velocityX = 0
	  
  }

  
  
  drawSprites();
 
}



