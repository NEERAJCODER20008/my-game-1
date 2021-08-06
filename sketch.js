var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];

var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
 
 ball=new Ball() 

 
  

    
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
 
 ball.display() 
 

  //create the particles using frameCount
  if (frameCount%60===0){
    particles.push(new Particles(random(50,750),0))
  }


  //display the particles \
  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }



}