var gameState = "play"
var backGround,backGroundImage;
var iron_man,iron_manImage;
var flame,flameImage,flameGroup;
var thArmy,thArmyImage,thArmyGroup;
var score=0;
var gamestate = "play"

function preload(){
backGroundImage=loadImage("background.jpeg")
iron_manImage=loadImage("IM.png") 
flameImage=loadImage("fire.png")
thArmyImage=loadImage("red skull.png")
  
}

function setup() {
 createCanvas(600,300)
 backGround=createSprite(200,150) 
 backGround.addImage(backGroundImage) 
 backGround.scale=2.7;
backGround.setCollider("rectangle",0,0,700,170)
backGround.velocityX=-1;
  
iron_man=createSprite(50,150)  
iron_man.addImage(iron_manImage)
iron_man.debug=false;
iron_man.scale=0.1
 iron_man.setCollider("rectangle",0,0,1500,1000)
flameGroup=new Group();  
thArmyGroup=new Group(); 
score=0;
}

function draw() {
background(0)
 
 camera.position.x = iron_man.x;
            camera.position.y = iron_man.y;


if (gameState === "play") {  
Flame();
monsters();
  
flame.y=iron_man.y;
if (backGround.x<0){
  backGround.x=100;
}

if (keyDown("UP_ARROW")){
   iron_man.y=iron_man.y-2
}  
  
if (keyDown("DOWN_ARROW")){
  iron_man.y=iron_man.y+2
}
  
if (keyDown("space")){
  flame.visible=true;
  flame.velocityX=2;
}

if (flameGroup.isTouching(thArmyGroup)){
   flameGroup.destroyEach();
   thArmyGroup.destroyEach();
  
 }
  
  if (thArmyGroup.isTouching(iron_man)){
    gameState="end";
  }
    
  

  drawSprites(); 
}
if (gameState === "end"){
    stroke("lightblue");
    fill("blue");
    textSize(30);
    text("Game Over", 130,250)
    thArmyGroup.visible=false;
    
  }

}

function Flame(){
  flame=createSprite(30,150)
  flame.addImage(flameImage)
  flame.scale=0.3;
  flame.visible=false;
  flameGroup.add(flame)
// flame.debug=true;
  flame.setCollider("rectangle",0,0,200,40)
  flame.lifetime=300;
}

function monsters(){
  if (frameCount % 120 === 0) {
    var thArmy = createSprite(600,120,40,10);
    thArmy.y = Math.round(random(100,250));
    thArmy.addImage(thArmyImage);
    thArmy.scale = 0.4;
    thArmy.velocityX = -3;
    thArmy.lifetime=200;
    thArmyGroup.add(thArmy)
    //thArmy.debug=true;
}
}