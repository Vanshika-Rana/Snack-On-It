import Phaser from "../lib/phaser.js";
export default class Game extends Phaser.Scene {
	constructor() {
		super("game");
	}
	preload() {
		this.load.image("background", "assets/bg.png");
	}
	create() {
		this.add.image(350, 400, "background").setScrollFactor(1, 0);
	}
}
