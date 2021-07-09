var balloon;

function preload() {
  bg = loadImage('cityimage.png');
  balloonImage = loadAnimation("hotairballoon2.png", "hotairballoon3.png","hotairballoon3.png");
}

function setup() {

  database = firebase.database()
  createCanvas(1365,650);
  balloon = createSprite(100, 400, 20, 20);
  balloon.addAnimation("balloon", balloonImage);
  balloon.scale = 0.4;
}

function draw() {
  background("white");
  textsize(20);
  fill("black")
  text("use arrow keys to move the hot air balloon",250,30)
  
  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10;
  }
  
  if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x + 10;
  }

  if(keyDown(UP_ARROW)){
    balloon.y = balloon.y - 10;
  }

  if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y + 10;
  }
  drawSprites();
}