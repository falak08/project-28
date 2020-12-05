
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world,engine;
var tree1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
tree1=new tree(200,200,20,20);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   World.add(world,engine);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  World.add(world,engine);
  tree1.display();
  
 
}



