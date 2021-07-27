var background,bg_img;
var astronaut;
var sleep_img,brush_img,gym_img,eat_img,drink_img,move_img,bath_img;

function preload () {
  // to load all the images
  bg_img=loadImage("images/iss.png")
  sleep_img=loadAnimation("images/sleep.png")
brush_img=loadAnimation("images/brush.png")
gym_img=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png")
eat_img=loadAnimation("images/eat1.png","images/eat2.png")
drink_img=loadAnimation("images/drink1.png","images/drink2.png")
move_img=loadAnimation("images/move.png","images/move1.png")
bath_img=loadAnimation("images/bath1.png","images/bath2.png")
}





function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  //to create bacground
 // bg_img=createSprite(0,0,800,400)
  //bg_img.addImage(bg_img)
  //scale=2
  //to create astronaut
  astronaut=createSprite(300,200)
  astronaut.addAnimation("sleeping",sleep_img)
  astronaut.scale=0.1

  
}

function draw() {
  background(255,255,255);  

  drawSprites()

  textSize(20)
  fill ("white")
  text("Instructions",20,35)
  textSize(15)
  text("UP Arrow=Brushing",20,55)
  text("Down Arrow=Gymming",20,70)
  text("left Arrow=Eating",20,85)
  text("Right Arrow=Bathing",20,100)
  text("m key=moving",20,115)

  edges=createEdgeSprites()
  astronaut.bounceOff(edges)

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gyming",brush_img)
    astronaut.changeAnimation("brushing")
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("gymming",gym_img)
    astronaut.changeAnimation("gymming")
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("Eating",eat_img)
    astronaut.changeAnimation("Eating")
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("Bathing",bath_img)
    astronaut.changeAnimation("Bathing")
    astronaut.y=350;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }
  if(keyDown("m")){
    astronaut.velocityX=3;
    astronaut.velocityY=4;
  }

  
}