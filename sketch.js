const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var backgroundImg;


function preload() {
//preload the images here
backgroundImg = loadImage("images/GamingBackground.png");

}

function setup() {
  createCanvas(3000, 800);
  // create sprites here
  engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(300,450,1500,20);
    hero = new Hero(200,100);
    

}

function draw() {
  background(backgroundImg);

  ground.display();
  hero.display();

}

