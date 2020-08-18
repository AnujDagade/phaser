class scene1 extends Phaser.Scene{
constructor(){
	super("bootGame");
}
 init(){
	 
 }
 preload(){
 	this.load.image("background","assets/background.png");
 	this.load.spritesheet("ship2","assets/ship2.png",{frameWidth:32,frameHeight:16});
 	this.load.spritesheet("ship","assets/ship.png",{frameWidth:16,frameHeight:16});
 	this.load.image("playbutton","assets/playbutton2.png");
 	this.load.spritesheet("explosion","assets/explosion.png",{frameWidth:16,frameHeight:16});
	this.load.spritesheet("ship3","assets/ship3.png",{frameWidth:32,frameHeight:32}); 
 }
 create() {
	this.add.text(20,20,"LOADING GAME.....+.");
	this.add.text(config.width/2-200,config.height-100,"Made by Anuj",{font:"75px Arial",fill:"blue"});
	this.playbutton=this.add.image(config.width/2-50,config.height/2-50,"playbutton");
	this.playbutton.setScale(0.5);
	//this.scene.start("playGame");
	this.playbutton.setInteractive();
	  	this.playbutton.on('pointerdown',this.down,this);
  }
  
  update(){

 
  }
  down(){
  	this.scene.start("playGame");
	console.log("btnpressed");
  }
   
	
    
  
  }