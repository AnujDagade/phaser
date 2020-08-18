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
	this.ship3 = this.add.sprite(config.width/2,config.height/2,"ship3");
	this.ship3.setInteractive();
	this.ship3.setScale(6);
	this.ship = this.add.sprite(50,20,"ship"); 
	
	this.ship.setInteractive(); 
	//this.ship.setOrigin(100,100);
	this.ship.setScale(5);
	this.ship2 = this.add.sprite(config.width-140,20,"ship2");
	this.ship2.setInteractive();
	this.ship2.setScale(5);
	
	this.anims.create({
		key:"ship_anim",
		frames:this.anims.generateFrameNumbers("ship"),
		frameRate:20,
		repeat:-1	
	});
	this.anims.create({
		key:"ship2_anim",
		frames:this.anims.generateFrameNumbers("ship2"),
		frameRate:20,
		repeat:-1	
	});
	this.anims.create({
		key:"ship3_anim",
		frames:this.anims.generateFrameNumbers("ship3"),
		frameRate:20,		
		repeat:-1
	});
	this.anims.create({
		key:"explode",
		frames:this.anims.generateFrameNumbers("explosion"),
		frameRate:20,
		repeate:0,
		hideOnComplete:true	
	});
	this.ship.play("ship_anim");
	this.ship2.play("ship2_anim");
	this.ship3.play("ship3_anim");
	this.ship.on('pointerdown',this.destroyship,this);
	this.ship2.on('pointerdown',this.destroyship2,this);
	this.ship3.on('pointerdown',this.destroyship3,this);
  }
 
  	update(){
		this.turn = this.ship.angle += 0;  	
		//console.log(this.turn);
	
		this.endreach(this.ship,4);
		this.endreach(this.ship2,6);
		this.endreach(this.ship3,10);
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
	this.ship.setTexture("explosion");
	this.ship.play("explode");
}
destroyship2(){
	//this.textures.remove('ship');
	this.ship2.setTexture("explosion");
	this.ship2.play("explode");
}
destroyship3(){
	//this.textures.remove('ship');
	this.ship3.setTexture("explosion");
	this.ship3.play("explode");
	
}
}