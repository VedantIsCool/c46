var bg, bgImg;
var bottomGround;
var topGround;
var balloon, balloonImg;
var obsTop, birds, otherBalloons;
var obsBottom, smallBuildings, tallBuildings, lampPosts;

function preload(){
bgImg = loadImage("assets/bg.png");

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png");

birds = loadImage("assets/obsTop2.png");
otherBalloons = loadImage("assets/obsTop1.png");

smallBuildings = loadImage("assets/obsBottom1.png");
tallBuildings = loadImage("assets/obsBottom3.png");
lampPosts = loadImage("assets/obsBottom2.png");
}

function setup(){
//create canvas
createCanvas(400,400);

//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = false;

topGround = createSprite(200,10,800,20);
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;
}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
            
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 0.5     ;

           spawnObstaclesBottom();
           spawnObstaclesTop();
           Bar();
   
        drawSprites();
        
}

function spawnObstaclesTop() {
  if(World.frameCount % 60 === 0){
    obstacleTop = createSprite(400,50,40,50);

    obstacleTop.scale = 0.1;
    obstacleTop.velocityX = -4;
    obstacleTop.Y = Math.round(random(10,100));

    var rand = Math.round(random(1,2));
    switch(rand){
      case 1: obstacleTop.addImage(birds);
        break;
      case 2: obstacleTop.addImage(otherBalloons);
        break;
    }
    obstacleTop.lifetime = 100;
    balloon.depth += 1;
  }
}

function spawnObstaclesBottom() {
  if(World.frameCount % 60 === 0){
    obstacleBottom = createSprite(400,305,40,50);

    obstacleBottom.scale = 0.1;
    obstacleBottom.velocityX = -4;
    obstacleBottom.Y = Math.round(random(10,100));

    var rand = Math.round(random(1,3));
    switch(rand){
      case 1: obstacleBottom.addImage(lampPosts);
        break;
      case 2: obstacleBottom.addImage(tallBuildings);
        break;
      case 3: obstacleBottom.addImage(smallBuildings);
        break;
    }
    obstacleBottom.lifetime = 100;
    balloon.depth += 1;
  }
}

function Bar(){
  if(World.frameCount % 60 === 0){
    var bar = createSprite(400,200,10,800);
    bar.velocityX = -6;
    bar.depth = balloon.depth;
    bar.lifetime = 70;
    bar.visible = false;
  }
}