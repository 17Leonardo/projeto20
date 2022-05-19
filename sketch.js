
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body


var solo;
var quadrado;
var circulo;
var retangulo;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var solo_options = {
		isStatic: true
	}

	var circulo_options = {
		restitution: 1,
		frictionAir: 0.005
	}

	var retangulo_options = {
		restitution: 0,
		frictionAir: 0.5
	}

	var quadrado_options = {
		restitution: 0,
		frictionAir: 0
	}


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
	solo = Matter.Bodies.rectangle(400, 700, 800, 30, solo_options);
	World.add(world, solo);

	quadrado = Matter.Bodies.rectangle(100, 100, 50, 50, quadrado_options);
	World.add(world, quadrado);

	retangulo = Matter.Bodies.rectangle(300, 100, 100, 50, retangulo_options);
	World.add(world, retangulo);

	circulo = Matter.Bodies.circle(700, 100, 50, circulo_options);
	World.add(world, circulo);

	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background(0);
  
  drawSprites();
  fill("crimson");
  rect(solo.position.x, solo.position.y, 800, 30);
  fill("limegreen");
  rect(quadrado.position.x, quadrado.position.y,50, 50);
  fill("orange");
  rect(retangulo.position.x, retangulo.position.y,100, 50);
  fill("white");
  ellipse(circulo.position.x, circulo.position.y,50);
 
}



