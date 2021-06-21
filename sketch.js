var backImage,backgr;
var player, player_running;
var ground,ground_img,bananaImg,stoneImg;

var END =0;
var PLAY =1;
var gameState = PLAY;

function preload(){
  backImage=loadImage("images/jungle.jpg");
  player_running = loadAnimation("images/Monkey_01.png","images/Monkey_02.png","images/Monkey_03.png","images/Monkey_04.png");
  bananaImg = loadImage("images/banana.png");
  stoneImg = loadImage("images/stone.png");
}

function setup() {
  createCanvas(800,400);
  
  backgr=createSprite(0,0,800,400);
  backgr.addImage(backImage);
  backgr.scale=1.5;
  backgr.x=backgr.width/2;
  backgr.velocityX=-4;
  
  player = createSprite(100,340,20,50);
  player.addAnimation("Running",player_running);
  player.scale = 0.1;
  
  ground = createSprite(400,350,800,10);
  ground.x=ground.width/2;
  ground.visible=false;
  
}

function draw() { 
  background(0);

  if(gameState===PLAY){
  
  if(backgr.x<100){
    backgr.x=backgr.width/2;
  }
  
    if(keyDown("space") ) {
      player.velocityY = -12;
    }
    player.velocityY = player.velocityY + 0.8;
  
    player.collide(ground);

    spawnFood();

  }

  drawSprites();
}

function spawnFood(){

    if(frameCount % 80===0){
      var banana = createSprite(600,250,40,10);
      banana.y = random(120,200);
      banana.addImage(bananaImg);
      bananaImg.scale = 0.05;
      banana.velocityX= -4;

      banana.lifetime = 300;
      player.depth = banana.depth+1;
      FoodGroup.add(banana);
    }

}

function spawnStones(){

  if(frameCount % 60===0){
    var stone = createSprite(600,250,40,10);
    stone.y = random(120,200);
    stone.addImage(stoneImg);
    stoneImg.scale = 0.1;
    stone.velocityX= -4;

    stone.lifetime = 300;
    player.depth = banana.depth+1;
    StoneGroup.add(stone);
  }

}
