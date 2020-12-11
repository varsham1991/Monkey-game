
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  createCanvas(600,600);
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground=createSprite(400,350,1200,10);
  ground.velocityX=-4;
  console.log(ground.x);
  
  var survivalTime=0;
 
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  
 
}

function draw() {
background("white");

 stroke("white");
 textSize(20);
 fill("white");
 text("Score:"+ score,500,50);
  
 stroke("black");
 textSize(20);
 fill("black");
 survivalTime=Math.ceil(frameCount/frameRate());
 text("Survival Time:"+survivalTime,100,50); 
  
  Food();
  obstacles();
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
   if(keyDown("space")) {
        monkey.velocityY = -13;
    }
  
  if(monkey.isTouching(obstacleGroup)){
      ground.velocityX = 0;
      monkey.velocityY = 0
      
    obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
     
    obstacleGroup.setVelocityXEach(0);
    bananaGroup.setVelocityXEach(0);    
  
    survivalTime=0;
    
  }
  
    
    monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
      
  drawSprites();
}

function Food(){
  if(frameCount % 80 === 0){
   var banana = createSprite(300,300);
   banana.y = Math.round(random(120,200));
   banana.addImage(bananaImage);
   banana.scale = 0.1;
   banana.velocityX=-5;
   banana.lifeTime = 600;
   bananaGroup.add(banana); 
  }
}

function obstacles(){
 if(frameCount % 300 === 0){
   var obstacles = createSprite(300,310);
   obstacles.x = Math.round(random(250,400));
   obstacles.addImage(obstacleImage);
   obstacles.scale = 0.2;
   obstacles.velocityX=-5;
   obstacles.lifeTime = 600;
   obstacleGroup.add(obstacles);
 }
}





