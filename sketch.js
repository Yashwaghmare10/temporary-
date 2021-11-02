var player 
var score
var football,footballimg
var goalpost,goalpostimg
var goalkeeper,goalkeeperimg
var player,playerimg
var count=0
var score=0
var gamestate="play"


 function preload (){
     footballimg=loadImage("football.png")
     goalkeeperimg=loadImage("goalkeeper.png")
     goalpostimg=loadImage("goalpost.jpg")
     playerimg=loadImage("player.png")
}
 function setup () {
     createCanvas(800,600)
     //goalpost=createSprite(300,200)
     //goalpost.addImage(goalpostimg)
     player=createSprite(480,480)
     player.addImage(playerimg)
     goalkeeper=createSprite(480,320)
     goalkeeper.addImage(goalkeeperimg)
     football=createSprite(360,530)
     football.addImage(footballimg)
     football.scale=0.04
     goalkeeper.debug=true
     football.debug=true
     goalkeeper.setCollider("rectangle",0,0,80,150)
     football.setCollider("circle",0,0,600)
 }
 function draw (){
     background (goalpostimg)
     if(gamestate==="play"){
     if(frameCount%15===0){
        goalkeeper.x=Math.round(random(120,650)) 
     }
     if(count<5){
        kick()
     }
    }
    if(count>5){
    gamestate="end"
    }
   
     drawSprites();
     textSize(20)
     fill("white")
     text("count:"+count,30,50)
     text("score:"+score,700,50)
     if(gamestate==="end"){
        background("black")
        textSize(20)
         fill("white")
         text("count:"+count,400,350)
         text("score:"+score,400,450)
        }

 }
 function kick(){
    if (mousePressedOver(football)){
        football.velocityY=-4
        count++
        }
     if (football.isTouching(goalkeeper)){
        football.visible=false
     }
     else{
         if(football.y<=100)
         football.visible=false
         score+=7
     }
     if(keyDown("r")&&count<5){
         football.x=360
         football.y=530
     }

 }
     
 