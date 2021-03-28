var canvas,bgimg,allPlayers;
var gamestate=0,playerCount=null;
var database,form,player,game;
var car1,car2,car3,car4,cars;
function preload(){
  car1img=loadImage("./images/car1.png")
  car2img=loadImage("./images/car2.png")
  car3img=loadImage("./images/car3.png")
  car4img=loadImage("./images/car4.png")
  track=loadImage("./images/track.jpg")
}
function setup(){
  canvas= createCanvas(displayWidth-20,displayHeight-30);
  database=firebase.database();
game =new Game()
game.gamestate();
game.start()
}
function draw(){
  background(255)
if(playerCount===4){
  game.update(1)
}
if(gamestate===1){
  clear()
  game.play()
}

if(gamestate===2){
  game.update(2)
  game.end()
}
}