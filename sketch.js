var shipImage,seaImage
var sea,ship;
function preload(){
shipImage=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage=loadImage("sea.png");

}

function setup(){
  createCanvas(400,400);
  sea=createSprite(400,200);
  sea.addImage(seaImage);
  sea.scale=0.3;
  sea.velocityX=-3;

  ship=createSprite(250,300);
  ship.addAnimation("ship",shipImage);
  ship.scale=0.2;

}

function draw() {
  background("blue");

  if(sea.x<0){
    sea.x = width/2;
  }

 drawSprites();
}