class Form2 {

    constructor() {
      this.radio = createRadio();
      this.radio2 = createRadio() ;
      this.radio3 = createRadio();
      this.radio4= createRadio(); 
    }

  display(){
      background(255, 204, 0);
    form.hide();
    Player.getPlayerInfo();
    player.update(); 
    stroke('red');
    textSize(20);
    text("Do you think due to coronavirus, fees of private Schools should be reduced ?",10,40);
    this.radio.option('Yes');
    this.radio.option('No');
    this.radio.position(90 , 60);

    text("Do you think is govt. right to extend the lockdown ? ",10,130);
    this.radio2.option('Yes');
    this.radio2.option('No');
    this.radio2.position(90 ,145);

    text("Do you think pepople's misbehaviour towards govt. is correct?" ,10,220);
    this.radio3.option('Yes');
    this.radio3.option('No');
    this.radio3.position(90 , 235);

    text("Do you think coronavirus can finish from India completely ? ",10,310);
    this.radio4.option('Yes');
    this.radio4.option('No');
    this.radio4.position(90 , 325);

   fill(255, 0, 0);
    let val = radio.value();
    text(val,490,330 );
     
    }
  }
