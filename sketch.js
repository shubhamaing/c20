var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400,200,100,30);
  movingRect = createSprite(300,100,50,100);
  fixedRect.shapeColor = "red";
  movingRect.shapeColor = "blue";
  console.log(movingRect.x-fixedRect.x);  

}

function draw() {
  background(0);  

  movingRect.x = mouseX;
  movingRect.y= mouseY;

  

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2
    && fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2
    && movingRect.y-fixedRect.y<fixedRect.height/2+movingRect.height/2){
      movingRect.shapeColor = "green";
      fixedRect.shapeColor = "yellow";
  }else{
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "red";
  }


  drawSprites();
}