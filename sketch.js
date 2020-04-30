var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var form2;

var form, player, game;

function setup(){
  canvas = createCanvas(1200, 700);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    form2 = new Form2();
    form2.display();
  }
  
}
