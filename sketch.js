
var bgImg,bg
var jet,jetImg,obstaclesImg1,obstaclesImg2,obstaclesImg3,obstaclesImg4
var sound

function preload(){
  bgImg = loadImage("Img/bg.jpg")
 
  jetImg= loadAnimation("Img/jet1.png","Img/jet 2.png","Img/jet 3.png")

  sound = loadSound("sound/fly.mp3")


  obstaclesImg1 = loadImage("Img/zap1.png")
  obstaclesImg2 = loadImage("Img/zap2.png")
  obstaclesImg3 = loadImage("Img/zap3.png")
  obstaclesImg4 = loadImage("Img/zap4.png")
}



function setup() {
  createCanvas(windowWidth,windowHeight);
 
//creating background
bg = createSprite(0,0,1400,600)
bg.addImage(bgImg)
bg.scale=1
bg.velocity.x=-3
bg.x=bg.width/2

//creating jet
jet = createSprite(80,300,20,300)
jet.addAnimation("flying",jetImg)
jet.scale=0.9
}


function draw() {
  background("white");  
 
  if(bg.x<0){
    bg.x=bg.width/2

  }
  if(keyDown(UP_ARROW)){
    jet.y=jet.y-4
    sound.play()

  }
if(keyDown(DOWN_ARROW)){
  jet.y=jet.y+4
  sound.play()
}

//if(jet.isTouching(obstacles)){
 
//}

//adding function
obstacles()

  drawSprites();

}

function obstacles(){
 if(frameCount % 400 === 0){
  var obstacles = createSprite(1450,300,10,10)
  obstacles.velocityX=-2

  var rand = Math.round(random(1,4))
  switch(rand){

    case 1 : obstacles.addImage(obstaclesImg1)
    break;
    case 2 :  obstacles.addImage(obstaclesImg2)
    break;
    case 3 :  obstacles.addImage(obstaclesImg3)
    break;
    case 4 :  obstacles.addImage(obstaclesImg4)
    break;

  default :break;
  }
  


 }

}