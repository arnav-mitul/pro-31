const Engine = Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;

var STAND;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300

function setup() {
  createCanvas(800,400);

 engine = Engine.create();
 world=engine.world;
 
 for (var k = 10 ; k<=width ; k= k+80){
            
  divisions.push(new division(k,height-divisionHeight/2,10,divisionHeight));}

STAND = new division(100,350,5,100);


}

function draw() {
  background(0);  
  Engine.update(engine)
  STAND.display();
  drawSprites();
}

