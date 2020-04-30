class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.input2  = createInput("Email");
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.input2.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Survey App");
    this.title.position(500,0);

    this.input.position(490,300);
    this.input2.position(490,330);
    this.button.position(600,400);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.input2.hide();
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
