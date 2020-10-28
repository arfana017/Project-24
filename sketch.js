
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = "white";

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = new Paper(200,650,20);
	tBottom = new Dustbin(600,650,200,20);
	tSide1 = new Dustbin(500,610,20,100);
	tSide2 = new Dustbin(700,610,20,100);

	ground = Bodies.rectangle(width/2, height-35, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  ball.display();
  tBottom.display();
  tSide1.display();
  tSide2.display();
	
	if (keyCode === UP_ARROW) {
	   
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	
	 }

  drawSprites();
 
}



