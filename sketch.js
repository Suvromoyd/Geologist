const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer,rubberB,stone,iron;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubberB = new Rubber(850,500,60)
    stone = new Stone(250,500,60,100);
    iron = new Iron(550,500,60,60);

}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    
    plane.display();
    hammer.display();
    rubberB.display();
    stone.display();
    iron.display();
 
}