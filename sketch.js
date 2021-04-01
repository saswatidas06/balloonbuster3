var blueBalloon,pinkBalloon,redBalloon,greenBalloon;
var blueBalloonImage,pinkBalloonImage,redBalloonImage,
    greenBalloonImage;
var bow;
var bowImage;
var arrow;
var arrowImage;
var background;
var backgroundImage;



function preload(){
 //load your images here 
  redBalloonImage=loadImage("red_balloon0.png");
 pinkBalloonImage=loadImage("pink_balloon0.png");
   blueBalloonImage=loadImage("blue_balloon0.png");
   greenBalloonImage=loadImage("green_balloon0.png");
  bowImage=loadImage("bow0.png");
  arrowImage=loadImage("arrow0.png");
  backgroundImage=loadImage("background0.png");
}

function setup() {
  createCanvas(600, 600);
  
  background=createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale=2.3;

    bow = createSprite(480,220,20,50);
  bow.addImage(bowImage);
  
  redBalloon=createSprite(0,Math.round(random(20,370)),10,10);
  redBalloon.addImage(redBalloonImage);
   redBalloon.velocityX=3;
   redBalloon.lifetime=150;
   redBalloon.scale=0.1;
  
  blueBalloon=createSprite(0,Math.round(random(20,370)),10,10);
  blueBalloon.addImage(blueBalloonImage);
   blueBalloon.velocityX=4;
   blueBalloon.lifetime=100;
    blueBalloon.scale=0.1;
  pinkBalloon=createSprite(0,Math.round(random(10,370)),10,10);
  pinkBalloon.addImage(pinkBalloonImage);
   pinkBalloon.velocityX=2.5;
   pinkBalloon.lifetime=140;
   pinkBalloon.scale=1.2;
  greenBalloon=createSprite(0,Math.round(random(20,370)),10,10);
  greenBalloon.addImage(greenBalloonImage);
  greenBalloon.velocityX=2;
   greenBalloon.lifetime=170;
   greenBalloon.scale=0.1;
 
 
 
 
  arrow=createSprite(490,220);
  arrow.addImage(arrowImage);
  arrow.scale=0.3
  
}

function draw() {

  background.velocityX=-4;
  if  (background.x<0){
    background.x=background.width/2;
  }
  
  if (keyDown("space")){
    arrow.velocityX=-4;
  }
  drawSprites();
}
function spawnBalloon(){
  var select_balloon = Math.round(random(1,4));
    console.log(select_balloon)
      if (world.frameCount % 80 == 0){
        if(select_balloon==1){
          redBallon();
        }
        else if (select_ballon==2){
          greenBalloon();
        
        }
        else if (select_balloon==3){
          blueBalloon();
        }
        else if(select_balloon==4){
          pinkBalloon();
        }
      }
  }


