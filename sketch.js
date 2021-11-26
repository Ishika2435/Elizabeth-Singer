// const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;
// const Constraint = Matter.Constraint;

var bg1, bg2, bg3

var elizabeth

var obs1, obs2, obs3, obs4, obs5, obs6
var invisibleGround
var score = 0

function preload(){
  bg1 = loadImage("park1.png");
  bg2 = loadImage("park2.png");
  bg3 = loadImage("stage.png");

  eliImage = loadAnimation("eli1.png", "eli2.png");
  eli2Image = loadAnimation("eli1.png");
  eli3Image = loadAnimation("eli1.png");

  obs1Image = loadImage("animal1.png");
  obs2Image = loadImage("animal3.png");
  }

//Function to set initial environment
function setup() {
  createCanvas(1500,700);
 // engine = Engine.create();
 // world = engine.world;

  park1 = createSprite(750,350);
  park1.addImage(bg1);
  park2 = createSprite(750,350);
  park2.addImage(bg2);
  park2.visible = false;
  stage = createSprite(750,350);
  stage.addImage(bg3);
  stage.visible = false;
 
  elizabeth = createSprite(50,600);
  elizabeth.addAnimation("elirunning", eliImage);
  elizabeth.addAnimation("elijumping", eli2Image);
  elizabeth.addAnimation("elistanding", eli3Image);
  elizabeth.scale = 2
  elizabeth.velocityX = 5;
  elizabeth.debug = true;
  elizabeth.setCollider("rectangle", 0, 0, 65,150);

  obs1 = createSprite(470,550);
  obs1.addImage(obs1Image);
  obs1.scale = 0.4;
  obs1.debug = true;
  obs1.setCollider("rectangle", 0, 0, 140,150);

  invisibleGround = createSprite(750,650,1700,15);
  invisibleGround.visible = false;

  textSize(20); 
}

// function to display UI
function draw() {

  if(elizabeth.x > 1500){
    park2.visible = true;
    elizabeth.x = 10;
  }

  if(keyDown("space")){
    elizabeth.velocityY = -5;
    elizabeth.changeAnimation("elijumping", eli2Image);
  }
  elizabeth.velocityY = elizabeth.velocityY+0.2;
  elizabeth.collide(invisibleGround);
  obs1.collide(invisibleGround);
  console.log(elizabeth.y)

  if(elizabeth.isTouching(obs1)){
    elizabeth.changeAnimation("elistanding");
    elizabeth.velocityX = 0;
  }

  drawSprites();
  stroke("black");
  text("Score = " + score, 1400,680);

}



