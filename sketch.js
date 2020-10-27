
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, BananaGroup;
var score
var ground

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
  
 
}



function setup() {
  createCanvas(600,600);
  
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);
    
  bananaGroup = new Group();
  
}


function draw() {
  background("white");
  
  if(keyDown("space")){
     monkey.velocityY = -15;
     }
  if(ground.x>60){
    ground.x = 300
  }
 
  monkey.velocityY = monkey.velocityY + 0.8;
  
  monkey.collide(ground);
  
  survivaltime();
  
  banana();
  
  obstacles();

  drawSprites();
}

function banana(){
  if(frameCount % 80 === 0){
    var banana = createSprite(70,500, 20, 20);
    banana.y = Math.round(random(120, 200));
    banana.addImage("banana",bananaImage);
    banana.velocityX = -5;
    banana.lifetime = 450;
    banana.scale = 0.1;
  }
}

function obstacles(){
  if(frameCount % 300 === 0){
    var obstacle = createSprite(600,310,20,20);
    obstacle.addImage("obstacle",obstacleImage);
    obstacle.scale = 0.5;
    obstacle.velocityX = -3;
    obstacle.scale = 0.2;
    
      
     }
}

function survivaltime(){
  var survivalTime = 0;
  stroke("white");
  textSize(20)
  fill("white");
  text("Score:" + score, 500, 50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text("Survvial Time:" + survivalTime, 100, 50);
}





