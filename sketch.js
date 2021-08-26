
function preload(){
  seaImg = loadImage("sea.png")
  shipImg1 = loadAnimation = ("ship1","ship2")
  sea.addImage(seaImg)
}

function setup(){
  createCanvas(400,400);
  sea = createSprites(200,200)
  
  
}

function draw() {
  background("blue");
  if (sea.x < 0)
  sea.x = sea.width/2;
  drawSprites()
 
}