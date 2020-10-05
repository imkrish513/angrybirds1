const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,height,1200,20)
    bird = new Bird(400,200)
    box1 = new Box(700,320,70,70);
    box2 = new Box(900,320,70,70);
    
    pig = new Pig(800,320)
    log = new Log(800,220,300,PI/2)
    
    box3 = new Box(700,180,70,70);
    box4 = new Box(900,180,70,70);
    
    pig1 = new Pig(800,180)
    log1 = new Log(800,120,350,PI/2)

    box5 = new Box(800,100,70,70);
    log2 = new Log(780,65,150,PI/7)
    log3 = new Log(850,65,150,-PI/7)

   
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig.display();
    log.display();
    box3.display();
    box4.display();
    pig1.display();
    log1.display();
    box5.display();
    log2.display();
    log3.display();
    bird.display();
}