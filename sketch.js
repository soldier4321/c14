var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

var cloud, cloudsGroup, cloudImage;
var obstacles,O1,O2,O3,O4,O5,O6;


var newImage;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudImage = loadImage("cloud.png");
  O1 = loadImage("obstacle1.png");
  O2 = loadImage("obstacle2.png");
  O3 = loadImage("obstacle3.png");
  O4 = loadImage("obstacle4.png");
  O5 = loadImage("obstacle5.png");
  O6 = loadImage("obstacle6.png");
}

function setup() {
  createCanvas(600, 200);

  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  // trex.addAnimation("collided",trex_collided)
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  console.log("Hello"+ 5)
  
}

function draw() {
  background(180);
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnClouds();
  spawnobstacles()
  drawSprites();
}
function spawnClouds() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.addImage(cloudImage)
    cloud.y = Math.round(random(10,60))
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    
    
    //assigning lifetime to the variable
    cloud.lifetime = 134
    
    //adjust the depth
    cloud.depth = trex.depth
    trex.depth = trex.depth + 1;
    }
}
function spawnobstacles() {
  //write code here to spawn the clouds
  if (frameCount % 70 === 0) {
    obstacles = createSprite(605,165,40,10);
   r = Math.round(random(1,6))
   switch(r){
    case 1:
      obstacles.addImage(O1)
    break;
    case 2:
      obstacles.addImage(O2)
    break;
    case 3:
      obstacles.addImage(O3)
    break;
    case 4:
      obstacles.addImage(O4)
    break;
    case 5:
      obstacles.addImage(O5)
    break;
    case 6:
      obstacles.addImage(O6)
    break;



   }
   
   
   
   obstacles.scale = 0.4;
    obstacles.velocityX = -3;
    
    
    //assigning lifetime to the variable
    obstacles.lifetime =200
    
    //adjust the depth
   // cloud.depth = trex.depth
    //trex.depth = trex.depth + 1;
    }
}


