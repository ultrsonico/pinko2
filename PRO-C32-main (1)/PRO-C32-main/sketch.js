
 

var Engine = Matter.Engine,

World = Matter.World,

Events = Matter.Events,

Bodies = Matter.Bodies;

var balls = [];

var plinkos = [];

var divisions =[];

var ball;



var divisionHeight=300;

var score =0;

var count=0;

var gameState="";



function setup() {

createCanvas(800, 800);

engine = Engine.create();

world = engine.world;

ground = new Ground(width/2,height,width,20);



for (var k = 0; k <=width; k = k + 80) {

 divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));

}

for (var j = 75; j <=width; j=j+50) {

   plinkos.push(new Plinko(j,75));

}



for (var j = 50; j <=width-10; j=j+50) {

    plinkos.push(new Plinko(j,175));

}



for (var j = 75; j <=width; j=j+50) {

    plinkos.push(new Plinko(j,275));

}



for (var j = 50; j <=width-10; j=j+50) {

    plinkos.push(new Plinko(j,375));

}



}



function draw() {

background("black");

textSize(35)

text("Puntuación : "+score,20,40);

fill("white");



textSize(35)

text(" 500 ", 5, 550);

text(" 500 ", 80, 550);

text(" 500 ", 160, 550);

text(" 500 ", 240, 550);

text(" 100 ", 320, 550);

text(" 100 ", 400, 550);

text(" 100 ", 480, 550);

text(" 200 ", 560, 550);

text(" 200 ", 640, 550);

text(" 200 ", 720, 550);

EndGame();

Engine.update(engine);

ground.display();



for (var i = 0; i < plinkos.length; i++) {

 plinkos[i].display();  

}



if(ball!=null)

{

   ball.display();

    if (ball.body.position.y>760){

      if (ball.body.position.x<320 && ball.body.position.x>0){

        score=score+500;

        if(count>=5)gameState="end";

        ball=null;

      }else if(ball.body.position.x>321 && ball.body.position.x<560){

        score=score+100;

        if(count>=5)gameState="end";

        ball=null;

      }else if(ball.body.position.x>561 && ball.body.position.x<800){

        score=score+200;

        if(count>=5)gameState="end";

        ball=null;

       

      }

     

    }



}



for (var k = 0; k < divisions.length; k++)

{

 divisions[k].display();

}



}

function EndGame()

{

if(count>=5)

{    

textSize(35)

text("Game Over",300,40);

fill("white");



}

}

function mousePressed()

{

if(gameState!== "end"){

count++;

ball=new Ball(mouseX, 10, 10, 10);  

}

}




