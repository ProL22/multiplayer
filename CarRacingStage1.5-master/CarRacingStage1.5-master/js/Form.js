class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    //create a reset button
    this.reset=createButton('Reset');
  }
  // we have made a function which states - the buttons,elements and the text input should be hidden 
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    
  }

  display(){
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 50, 0);
    //give pos to the reset button
     this.reset.position(displayWidth-100,20);
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    // make the gameStae and playerCount 0 in database when we click on the reset button
    this.reset.mousePressed(()=>{
      game.update(0);
      player.updateCount(0);
    })
    // we have made a if condition which states- if we press mouse on the button so the input an the button should hide and the name should be updated on the database and also we should see greeting which says welcom and the name of the player
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 70, displayHeight/4);
    });

  }
}
