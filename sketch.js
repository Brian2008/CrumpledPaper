
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var world;
var box1;
var leftSprite,middleSprite,rightSprite

function setup() {
	createCanvas(800, 700);
	box1 = new Paper(100,300);
	leftSprite=createSprite(490, 600, 20,100);
	leftSprite.shapeColor=("red")
	middleSprite=createSprite(width/2, 650, 200,20);
	middleSprite.shapeColor=("red")
	rightSprite=createSprite(310, 600, 20,100);
	rightSprite.shapeColor=("red")


	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  display.box1();
  drawSprites();
 
}



