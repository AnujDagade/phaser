class scene2 extends Phaser.Scene{
constructor(){
	super("playGame");
}
  create() {
	//this.add.text(20,20,"Game is running",{font:"25px Arial",fill:"blue"});
	this.background = this.add.tileSprite(0,0,config.width,config.height,"background");
	this.background.setOrigin(0,0);
	this.background.setScale(3.8,2);
	alert("Click on ships to destroy them");
	alert("This Game is under devlopment, this build does not represente final build")
	//ship
	this.ship = this.add.image(50,20,"ship"); 
	this.ship.setInteractive(); 
	//this.ship.setOrigin(100,100);
	this.ship.setScale(5);
	this.ship2 = this.add.image(config.width-100,20,"ship2");
	this.ship2.setInteractive();
	this.ship2.setScale(5);
	
	this.ship.on('pointerdown',this.destroyship,this);
	this.ship2.on('pointerdown',this.destroyship2,this);
  }
  	update(){
		this.turn = this.ship.angle += 0;  	
		//console.log(this.turn);
	
		this.endreach(this.ship,4);
		this.endreach(this.ship2,6);
  		this.background.tilePositionY -= 0.3;
}
endreach(vehicles,speed) {
		vehicles.y += speed;
	if (vehicles.y >=config.height) {
			vehicles.y = 20;
			}
	}
	
destroyship(){
	//this.textures.remove('ship');
	this.ship.destroy();
}
destroyship2(){
	//this.textures.remove('ship');
	this.ship2.destroy();
}
	
	
}