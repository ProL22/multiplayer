// here we have reffered the database which we have created in firebase and also reffered in index.html
var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;
// we have loaded images for cars and track
function preload(){
  c1=loadImage("images/car1.png");
  c2=loadImage("images/car2.png");
  c3=loadImage("images/car3.png");
  c4=loadImage("images/car4.png");
  t1=loadImage("images/track.jpg");
  
}
// in this funcyion we have stated-that the cavas should sync the screen of the device we are playing the game on and discplay the game  and also we have writeen that variable datatabse is the firebase.database and we have created the gameState
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  // we have made a if condition which states-if player count is 4 so game state shoul be 1
  if(playerCount === 4){
    game.update(1);
  }
  // we have made a if condition which states-if game state = 1 than clear and game should be said to play
  if(gameState === 1){
    clear();
    game.play();
  }
}
