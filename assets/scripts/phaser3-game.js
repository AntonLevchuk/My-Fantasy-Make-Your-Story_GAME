import GameScene from './game-scene.js';

const config = {
	type: Phaser.ATUO,
	width: 600,
	height: 900,
	scene: GameScene 
};

const game = new Phaser.Game(config);
