
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var stoneobj;
var groundobj;
var launcherobj;
var boy,boyimg , treeobj;
var mango,mango1,mango2,mango3,mango4,mango5;
var engine, world;
var launche_Force=100;

function preload()
{
	boyimg=loadImage("images/boy.png");
	//tree=loadImage("Plucking mangoes/mango.png");
}

function setup() {
	createCanvas(1200, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	
    groundobj=new Ground(width/2,790,width,10); 
	stoneobj=new Stone( 235,420,30);
	
	mango1=new Mango(1000,500,50);
	mango2=new Mango(900,550,70);
	mango3=new Mango(950,500,50);
	mango4=new Mango(920,550,30);
	mango5=new Mango(970,500,50);
	

	launcherobj=new Launcher(stoneobj.body,{x:235,y:420})
  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1300,
      height: 600,
      wireframes: false
    }
  });
	
    Engine.run(engine);

	detectCollision(stoneobj,mango1);
	detectCollision(stoneobj,mango2);
	detectCollision(stoneobj,mango3);
	detectCollision(stoneobj,mango4);
	detectCollision(stoneobj,mango5);
  
}


function draw() {

  rectMode(CENTER);
  background("white");
  textSize(25);
  text("Press Space to get a second Chance to Play!",50 ,50);
  image(boy ,200,340,200,300);
  ground.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  
 
}

function mouseDragged(){

Matter.Body.setPosition(stoneobj.body,{x: mouseX,y: mouseY});

}

function mouseRealsed(){
launcherobj.fly();
	
}

function keyPressed(){

	if(keyCode===32){
		Matter.Body.setPosition(stoneobj.body,{x: 235,y:420 });
		launcherobj.attach(stoneobj.body);
	}
}
function detectCollision(stoneobj,mango){
mangoBodyPosition=mango.Body.position;
stoneBodyPosition=stoneobj.Body.position;

var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
if(distance<=mango.r+stoneobj.r){
	Matter.Body.setStatic(mango.body,false);
}

}


