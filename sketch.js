var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world,engine,body

function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	 //fairyVoice.play();

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	
	starBody=new Star ();
	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	//Engine.run(engine);
  	star.x=starBody.position.x
  	star.y=starBody.position.y
	
	starBody=new Star()
}


function draw() {
  background(bgImg);

	var opt={
	isStatic:false
	}

  	if(star.y>480){
	//Body.setStatic(starBody,true)	
	//star.velocityY=0
	starBody(opt)
  	}
  	starBody.display();
  	drawSprites();
	
}

function keyPressed() {
	//write code here
	if(keyCode===LEFT_ARROW){
		fairy.x=fairy.x-24
	}

	if(keyCode===RIGHT_ARROW){
		fairy.x=fairy.x+24
	}

	if(keyCode===DOWN_ARROW){
		star.velocityY=5
		//starBody.setStatic=false
		//Body.setStatic(starBody,false)
		Matter.Body.setStatic(starBody,false)
	}
}
