const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;

var engine, world;

var Barrier1;
var Barrier2;
var Barrier3;
var Barrier4;
var ground;
var particle;
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;
var turns = 0;
var gameState = "play";




function setup() {
  createCanvas(480, 745);

  engine = Engine.create();
  world = engine.world;

  //bodies built below
  Barrier1 = new Ground(240, 742.5, 480, 5, "coral");
  Barrier2 = new Ground(477.5, 372.5, 5, 745, "coral");
  Barrier3 = new Ground(240, 2.5, 480, 5, "coral");
  Barrier4 = new Ground(2.5, 372.5, 5, 745, "coral");
  ground = new Ground(240, 735, 470, 10, "white");
  for (var k = 0;k <= width; k = k + 80){
    divisions.push(new Division(k, height - (divisionHeight/2), 10, divisionHeight));
  }
  for (var j = 40;j <= width; j = j+50){
    plinkos.push(new Plinko(j, 75));
  }
  for(var j = 15;j <= width - 10; j = j+50){
    plinkos.push(new Plinko(j, 175));
  }
  for (var j = 40;j <= width; j = j+50){
    plinkos.push(new Plinko(j, 275));
  }
  for(var j = 15;j <= width - 10; j = j+50){
    plinkos.push(new Plinko(j, 375));
  }
  
}
function draw(){
  background(0);
  Engine.update(engine);
  //display bodies below
  Barrier1.display();
  Barrier2.display();
  Barrier3.display();
  Barrier4.display();
  ground.display();

  for(var j = 0;j < plinkos.length; j++ ){
    plinkos[j].display();
  }
  for(var k = 0;k < divisions.length; k++ ){
    divisions[k].display();
  }
  
  text ("SCORE: "+score, 390, 20);
  textSize(20);
  text ("500", 25, height-divisionHeight/2)
  text ("300", 105, height-divisionHeight/2)
  text ("100", 185, height-divisionHeight/2)
  text ("100", 265, height-divisionHeight/2)
  text ("300", 345, height-divisionHeight/2)
  text ("500", 425, height-divisionHeight/2)
  stroke ("yellow");
  strokeWeight(4);
  line (10, 425, 470, 425);
  strokeWeight(0); 
  drawSprites();
  if(particle){
    particle.display();
    if(turns >= 5){
      gameState = "end";
      console.log("end");
      textSize(70);
      text ("GAME OVER", 40, 362.5);
      particle.body.position.y = -10;
    }
    if(particle.body.position.y > 450){

      if(particle.body.position.x < 80){
        score = score + 500;
        particle = null;
      }
      else if(particle.body.position.x > 80 && particle.body.position.x < 160 ){
        score = score + 300;
        
        particle = null;
      }
      else if(particle.body.position.x > 160 && particle.body.position.x < 240 ){
        score = score + 100;
        
        particle = null;
      }
      else if(particle.body.position.x > 240 && particle.body.position.x < 320 ){
        score = score + 100;
         
        particle = null;
      }
      else if(particle.body.position.x > 320 && particle.body.position.x < 400 ){
        score = score + 300;
        
        particle = null;
      }
      else if(particle.body.position.x > 400 && particle.body.position.x < 480 ){
        score = score + 500;
        
        
        particle = null;
      }
    }
  }
}

function keyPressed(){
  if(gameState !== "end"){
    turns += 1;
    particle = new Particle(mouseX, 20);
    console.log("mouse");
  }
  console.log("outside");
}