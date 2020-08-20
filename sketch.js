var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,line1,line2,line3,line1Body,line2Body,line3Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	line1=createSprite(270,580,20,100);
	line1.shapeColor=color("red");

	line2=createSprite(450,580,20,100);
	line2.shapeColor=color("red");
	
	line3=createSprite(360,620,150,20);
	line3.shapeColor=color("red");


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	line1Body = Bodies.rectangle(width/2,100,10);
	Matter.Body.setStatic( line1Body, {isStatic:true});	


   line2Body = Bodies.rectangle(width/2,100,10);
   Matter.Body.setStatic( line2Body, {isStatic:true});	

	line3Body = Bodies.rectangle(width/2,100,10);
	Matter.Body.setStatic( line3Body, {isStatic:true});	

	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic( packageBody, false);	
}
}



