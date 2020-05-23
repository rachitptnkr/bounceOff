var fixedRect, movingRect,ob1,ob2,ob3,ob4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  ob1=createSprite(200,200,50,50);
  ob1.shapeColor="blue";
  ob1.debug=true;

  ob2=createSprite(300,200,50,50);
  ob2.shapeColor="blue";
  ob2.debug=true;

  ob3=createSprite(400,200,50,50);
  ob3.shapeColor="blue";
  ob3.debug=true;

  ob4=createSprite(500,200,50,50);
  ob4.shapeColor="blue";
  ob4.debug=true;


 // movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  

  //calling isTouching
  if(isTouching(ob1,movingRect)){
    movingRect.shapeColor="yellow";
    ob1.shapeColor="yellow";
  }
else{
  movingRect.shapeColor="green";
  ob1.shapeColor="green";
 }

  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
  
  drawSprites();
}



function bounceOff(){
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2) {
  movingRect.velocityX = movingRect.velocityX * (-1);
  fixedRect.velocityX = fixedRect.velocityX * (-1);
}
if (movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
  && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
  movingRect.velocityY = movingRect.velocityY * (-1);
  fixedRect.velocityY = fixedRect.velocityY * (-1);
}
}