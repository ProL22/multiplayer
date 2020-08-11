class Game {
  constructor(){

  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }

    car1 = createSprite(100,200);
    car1.addImage(c1);
    car1.scale=1.5;
    car2 = createSprite(300,200);
    car2.addImage(c2);
    car2.scale=1.5;
    car3 = createSprite(500,200);
    car3.addImage(c3);
    car3.scale=1.5;
    car4 = createSprite(700,200);
    car4.addImage(c4);
    car4.scale=1.5;
    cars = [car1, car2, car3, car4];
  }

  play(){
    form.hide();

    Player.getPlayerInfo();
    player.getcarsAtEnd();
    if(allPlayers !== undefined){
      //var display_position = 100;
      background(rgb(20,50,0));
      image(t1,0,-displayHeight*4,displayWidth,displayHeight*5);
      //index of the array
      var index = 0;

      //x and y position of the cars
      var x = 280;
      var y;

      for(var plr in allPlayers){
        //add 1 to the index for every loop
        index = index + 1 ;

        //position the cars a little away from each other in x direction
        x = x + 300;
        //use data form the database to display the cars in y direction
        y = displayHeight - allPlayers[plr].distance;
        cars[index-1].x = x;
        cars[index-1].y = y;
    // we have made a if condition which states- if the car's index = player's index then make a blue circle down of the car which the layer is using
        if (index === player.index){
          //make the mark for the car to make it clear
          fill("blue");
          ellipse(x,y,80,80);
          cars[index - 1].shapeColor = "red";
          camera.position.x = displayWidth/2;
          camera.position.y = cars[index-1].y
        }
       
        //textSize(15);
        //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
      }
    }
    // we have made a if condition which states - if we press up arrow then the cars should move
    if(keyIsDown(UP_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
    }
     // we have made a if condition which states-if the distance covered by the player is more than 5000 than make the gameStae 2 and update car rank
    if(player.distance>5000){
      gameState=2;
      Player.updatecarAtEnd(player.rank);
    }
    drawSprites();
  }
}
