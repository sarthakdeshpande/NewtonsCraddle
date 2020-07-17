
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof,roof2,roof3,roof4,roof5;
var rope;
var ball,ball2,ball3,ball4,ball5;
var chain,chain2,chain3,chain4,chain5;
const Constraint = Matter.Constraint;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,150,100,50);
	roof2 = new Roof(300,150,100,50);
	roof3 = new Roof(200,150,100,50);
	roof4 = new Roof(600,150,100,50);
	roof5 = new Roof(500,150,100,50);
	ball = new Ball(400,200);
    ball2 = new Ball(300,200);
    ball3 = new Ball(200,200);
    ball4 = new Ball(600,200);
    ball5 = new Ball(500,200);
	rope = new Rope(ball.body,roof.body);
	chain = new Rope(ball.body,roof.body);
	chain2 = new Rope(ball2.body,roof2.body);
	chain3 = new Rope(ball3.body,roof3.body);
	chain4 = new Rope(ball4.body,roof4.body);
	chain5 = new Rope(ball5.body,roof5.body);
	Engine.run(engine);
}


function draw() {

  background(225);
  Engine.update(engine);
  rectMode(CENTER);
  drawSprites();
  rope.display();
  chain.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  roof.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();
  ball.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
}

function mouseDragged(){
    Matter.Body.setPosition(ball3.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
	
}

