var ball



const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2}
  
		ball=Bodies.circle(200,200,10)
		World.add(world,ball)
	Engine.run(engine);

	rightside=new Ground(width/2,670,width,20) 
	leftside=new Ground(1100,600,20,120) 
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display()
}
function keyPressed(){
if (keyCode===UP_ARROW){
	Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.4})

}
}

