// var Engine = Matter.Engine,
//   World = Matter.World,
//   Events = Matter.Events,
//   Bodies = Matter.Bodies;
 
// var particles = [particle];
// var plinkos = [];
// var divisions =[];
// var divisionHeight=300;
// var score =0;
// var particle;
// var count =0;
// var gameState = "PLAY"
// function setup() {
//   createCanvas(800, 800);
//   engine = Engine.create();
//   world = engine.world;
//   ground = new Ground(width/2,height,width,20);

  
//   for (var k = 0; k <=width; k = k + 80) {
//     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
//   }
  
//   for (var j = 75; j <=width; j=j+50) { 
//     plinkos.push(new Plinko(j,75));
//   }


//   for (var j = 50; j <=width-10; j=j+50) 
//   {
//     plinkos.push(new Plinko(j,175));
//   }

 
//   for (var j = 75; j <=width; j=j+50) { 
//     plinkos.push(new Plinko(j,275));
//   }

//   for (var j = 50; j <=width-10; j=j+50) 
//   {
//     plinkos.push(new Plinko(j,375));
//   }

  
// }
 


// function draw() {
//   background("black");
//   textSize(20)
//   Engine.update(engine);
  

//   fill("white")
//   textSize(30)
//   text("500",15,530)
//   text("500",95,530)
//   text("500",175,530)
//   text("100",255,530)
//   text("100",335,530)
//   text("100",410,530)
//   text("200",500,530)
//   text("200",575,530)
//   text("200",655,530)
//   text("150",735,530)
//   text("Score :"+score,20,30)
  
//   ground.display();
//     if ( gameState =="END") {
    
    
//     textSize(90);
//     text("GameOver", 150, 300);
    
//   }

//   // if (frameCount%60==0){
//   //   particles.push(new  Partical (random(10,width),10,10))
//   //   console.log("particles")
//   // }
//   //display the plinkos 
//   for (var i = 0; i < plinkos.length; i++) {
//     plinkos[i].display();   
//   }
   
//   //display the divisions
//   for (var k = 0; k < divisions.length; k++) {
//     divisions[k].display();
//   }

//   //display the paricles 
//   // for(var p=0; p < particles.length; p++){
//   //   particles[p].display();
//   // }
//   // if(particle!=null){
   
//   //   particle.display();
//   //   if(particle.body.position.y>760){

//   //     if(particle.body.position.x <300){
//   //       score=score+500;
//   //       particle=null;

//   //       if(count>= 5)gameState="END";
//   //     }
//   //     else if(particle.body.position.x< 600 && particle.body.position.x > 301){
//   //       score=score+100;
//   //       particle=null;
//   //       if(count>= 5)gameState="END";
//   //     }
//   //     else if(particle.body.position.x  < 900 && particle.body.position.x > 601 ){
//   //       score=score+200;
//   //       particle=null;
//   //       if(count>= 5)gameState="END";
//   //     }
//   //     else if(particle.body.position.x < 980 && particle.body.position.x > 601 ){
//   //       score=score+150;
//   //       particle=null;
//   //       if(count>= 5)gameState="END";
//   //     }
//   //   }
//   // }
//   if(particle!=null)
//   {
//     particle.display();

//     if(particle.body.position.y>700)
//     {
//       if(particle.body.position.x<300)
//       {
//         score=score+500;
//         particle=null;
//         if(count>= 5) gameState = "END";
//       }
//       else if(particle.body.position.x < 600 && particle.body.position.x > 301)
//       {
//         score = score+100;
//         particle=null;
//         if(count>= 5) gameState = "END";
//       }
//       else if(particle.body.position.x < 900 && particle.body.position.x > 601)
//       {
//         score = score+200;
//         particle=null;
//         if(count>= 5) gameState = "END";
//       }
//     }
//   }
//   mousePressed()

// }
// function mousePressed(){
//   if(gameState!=="END"){
//     count++
//     partical=new Partical(mouseX,50,10,10)
//   }
// }

var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [particle];
var plinkos = [];
var divisions=[];
var divisions;
var particle;
var gameState = "PLAY";
var divisionHeight=300;
var score =0;
var count=0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  Engine.update(engine);
   
  textSize(35)
  text("500",5,550)
  text("500",80,550)
  text("500",160,550)
  text("500",240,550)
  text("100",320,550)
  text("100",400,550)
  text("100",480,550)
  text("200",560,550)
  text("200",640,550)
  text("200",720,550)

  if(gameState == "END"){
    textSize(100)
    text("GAME OVER",200,400)
    fill("red");
  }
  for (var k = 0; k < plinkos.length; k++) {
     plinkos[k].display();
  }
  if(particle!=null)
  {
    particle.display();

    if(particle.body.position.y>700)
    {
      if(particle.body.position.x<300)
      {
        score=score+500;
        particle=null;
        if(count>= 5) gameState = "END";
      }
      else if(particle.body.position.x < 600 && particle.body.position.x > 301)
      {
        score = score+100;
        particle=null;
        if(count>= 5) gameState = "END";
      }
      else if(particle.body.position.x < 900 && particle.body.position.x > 601)
      {
        score = score+200;
        particle=null;
        if(count>= 5) gameState = "END";
      }
    }
  }
  for (var i = 0; i < divisions.length; i++){
   
    divisions[i].display();
  }
}
function mousePressed(){
  if(gameState !== "END"){
    count++;
    particle = new  Partical (mouseX,50,10,10)
  }
}
