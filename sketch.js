
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1;
var ground;
var Box1, Box2, Box3;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper1 = new Paper (300,600,70);
ground = new Ground (800,690,1600,20);
Box1 = new Bin(1200,650);

	Engine.run(engine);
  
}
function keyPressed(){
  if (keyCode === UP_ARROW){
Matter.body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});

  }
}
function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground.display();
  Box1.display();
  
  drawSprites();
 
}



