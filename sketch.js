var park, parkImg;
var bow, bowImg;
var redB, b1;
var pinkB, b2;
var greenB, b3;
var blueB, b4;
var score, selectNumber;
var arrow, arrowImg;
var redBGroup, pinkBGroup, greenBGroup, blueBGroup, arrowGroup;

function preload()
{
  parkImg = loadImage("background0.png");
  bowImg = loadImage("bow0.png");
  b1 = loadImage("red_balloon0.png");
  b2 = loadImage("pink_balloon0.png");
  b3 = loadImage("green_balloon0.png");
  b4 = loadImage("blue_balloon0.png");
  arrowImg = loadImage("arrow0.png");
}

function setup()
{
  createCanvas(400,400);
   
  park = createSprite(0,0,10,10);
  park.addImage("background",parkImg);
  park.scale = 2;
  //park.x = park.width /2;
  //park.velocityX = -2;
 
  bow = createSprite(390,200,10,10);
  bow.addImage(bowImg);
  
  score = 0;
  
  selectNumber = Math.round(random(1,4));
  
  redBGroup = new Group();
  pinkBGroup = new Group();
  greenBGroup = new Group();
  blueBGroup = new Group();
  arrowGroup = new Group();
}

function draw()
{
  background(0);
  
  bow.y = mouseY;
  
  if(frameCount%80 == 0)
 {
   if(selectNumber == 1)
  {
    spawnRedBalloons();
  }
   if(selectNumber == 2)
  {
    spawnPinkBalloons();
  }
   if(selectNumber == 3)
  {
    spawnGreenBalloons();
  }
   if(selectNumber == 4)
  {
    spawnBlueBalloons();
  }
 }
  
  
  drawSprites(); 
  
  text("Score= " + score,300,25);
  
  if(keyDown("space"))
 {
   
   createArrows();
 }
  if(arrowGroup.isTouching(redBGroup))
 {
   redBGroup.destroyEach();
   arrowGroup.destroyEach();
   score = score+4;
 }
  if(arrowGroup.isTouching(pinkBGroup))
 {
   pinkBGroup.destroyEach();
   arrowGroup.destroyEach();
   score = score+3;
 }
  if(arrowGroup.isTouching(greenBGroup))
 {
   greenBGroup.destroyEach();
   arrowGroup.destroyEach();
   score = score+2;
 }
  if(arrowGroup.isTouching(blueBGroup))
 {
   blueBGroup.destroyEach();
   arrowGroup.destroyEach();
   score = score+1;
 }
  spawnRedBalloons();
  spawnPinkBalloons();
  spawnGreenBalloons();
  spawnBlueBalloons();
}
function spawnRedBalloons()
{
  if(frameCount%100 == 0)
 {
   redB = createSprite(5,50,10,10);
   redB.addImage(b1);
   redB.velocityX = 2;
   redB.scale = 0.07;
   redB.lifetime = 180;
   redBGroup.add(redB);
 }
}
function spawnPinkBalloons()
{
  if(frameCount%80 == 0)
 {
   pinkB = createSprite(5,150,10,10);
   pinkB.addImage(b2);
   pinkB.velocityX = 2;
   pinkB.lifetime = 180;
   pinkBGroup.add(pinkB);
 } 
}
function spawnGreenBalloons()
{
  if(frameCount%90 == 0)
 {
   greenB = createSprite(5,250,10,10);
   greenB.addImage(b3);
   greenB.velocityX = 2;
   greenB.scale = 0.07;
   greenB.lifetime = 180;
   greenBGroup.add(greenB);
 }
}
function spawnBlueBalloons()
{
  if(frameCount%70 == 0)
 {
   blueB = createSprite(5,350,10,10);
   blueB.addImage(b4);
   blueB.velocityX = 2;
   blueB.scale = 0.08;
   blueB.lifetime = 180;
   blueBGroup.add(blueB);
 }
}
function createArrows()
{
  if(frameCount%1 === 0)
 {
   arrow = createSprite(390,50,10,10);
   arrow.addImage(arrowImg);
   arrow.velocityX = -4;
   arrow.scale = 0.3;
   arrow.depth = bow.depth;
   arrow.y = bow.y;
   bow.depth = bow.depth + 1;
   arrowGroup.add(arrow);
 }
}