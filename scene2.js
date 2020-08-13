class scene2 extends Phaser.Scene{
constructor(){
	super("playGame");
}
  create() {
	//this.add.text(20,20,"Game is running",{font:"25px Arial",fill:"blue"});
	this.background = this.add.tileSprite(0,0,config.width,config.height,"background");
	this.background.setOrigin(0,0);
	//ship
	this.ship = this.add.image(50,20,"ship");  
	//this.ship.setOrigin(100,100);
	  //this.ship.setScale(2);
	
	this.ship2 = this.add.image(100,20,"ship2"); 
  }
  	update(){
		this.turn = this.ship.angle += 0;  	
		//console.log(this.turn);
		this.ship.y += 1;
		this.ship2.y += 1;
		this.endreach(this.ship);
		this.endreach(this.ship2); 
		this.background.tilePositionY -= 0.5;
		
  
}
endreach(vehicles) {
	if (vehicles.y >=272) {
			vehicles.y = 20;
			
  	}
	}
}
