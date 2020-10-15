const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint
var engine,world;



function setup() {
  createCanvas(800,400);
  engine=Engine.create();
 
  world=engine.world;
  gr=new Ground(width/2,380,width,20)
  gr1=new Ground(width/2-100,300,250,10);
  gr2=new Ground(width/2+250,220,250,10);
  b1=new Box(210,275,30,40)
  b2=new Box(240,275,30,40);
  b3=new Box(270,275,30,40)
  b4=new Box(300,275,30,40);
  b5=new Box(330,275,30,40);
  b6=new Box(360,275,30,40)
  b7=new Box(390,275,30,40);

  ab1=new Box(240,235,30,40)
  ab2=new Box(270,235,30,40);
  ab3=new Box(300,235,30,40)
  ab4=new Box(330,235,30,40);
  ab5=new Box(360,235,30,40);

  aab1=new Box(270,195,30,40);
  aab2=new Box(300,195,30,40)
  aab3=new Box(330,195,30,40);

  aaab=new Box(300,155,30,40)


  c1=new Box(550,195,30,40)
  c2=new Box(580,195,30,40)
  c3=new Box(610,195,30,40)
  c4=new Box(640,195,30,40)
  c5=new Box(670,195,30,40)
  c6=new Box(700,195,30,40)
  c7=new Box(730,195,30,40)

  c8=new Box(580,155,30,40)
  c9=new Box(610,155,30,40)
  c10=new Box(640,155,30,40)
  c11=new Box(670,155,30,40)
  c12=new Box(700,155,30,40)

  c13=new Box(610,115,30,40)
  c14=new Box(640,115,30,40)
  c15=new Box(670,115,30,40)

  c16=new Box(640,75,30,40)
  var ball_options={
    isStatic:true
  }
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  sling=new SlingShot(this.ball,{x:100,y:200});
}

function draw() {
  Engine.update(engine);
  background(0);  

  fill("gold");
  ellipseMode(CENTER)
  ellipse(ball.position.x,ball.position.y,20,20);

  gr.display();
  gr1.display()
  gr2.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();

  ab1.display()
  ab2.display()
  ab3.display()
  ab4.display()
  ab5.display();

  aab1.display()
  aab2.display()
  aab3.display()

  aaab.display();

  c1.display();
  c2.display()
  c3.display()
  c4.display()
  c5.display()
  c6.display()
  c7.display();

  c8.display()
  c9.display()
  c10.display()
  c11.display()
  c12.display();

  c13.display();
  c14.display()
  c15.display()

  c16.display();
  sling.display();

 
  
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
function mouseReleased(){
    sling.fly();
}