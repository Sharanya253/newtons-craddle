const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var ground;
var bob1;
var bob2;
var bob3;
var rope1;
var rope2;
var rope3;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground=new Ground(400,100,700,40);
     bob1=new Bob(400,400);
	 bob2=new Bob(500,400);
	 bob3=new Bob(300,400);

	 rope1=new Rope(bob1.body,ground.body,0,0);
	 rope2=new Rope(bob2.body,ground.body,30,0);
	 rope3=new Rope(bob3.body,ground.body,-30,0);
	 
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  ground.display();
  bob1.display();
  bob2.display();
  bob3.display();
  rope1.display();
  rope2.display();
  rope3.display();
  
  drawSprites();
 
}

function keyPressed(){
	Matter.Body.applyForce(bob3.body,bob3.body.position,{x:-80,y:-40});
}

