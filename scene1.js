class scene1 extends Phaser.Scene{
constructor(){
	super("bootGame");
}
 init(){
	 
 }
 preload(){
 	this.load.image("background","assets/background.png");
 	this.load.image("ship","assets/ship.png");
 	this.load.image("ship2","assets/ship2.png");
 }
 create() {
	this.add.text(20,20,"LOADING GAME.....+.");

	this.scene.start("playGame");
  }
  }