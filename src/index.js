import Phaser from "phaser";
import Train from './Train';
import { levels } from './levels'
import p1 from "./assets/pixil-layer-P1.png";

class Boot extends Phaser.Scene {
  constructor(config) {
    super(config);
    this.passengersArr = []
  }

  preload() {
    this.load.image("logo", p1);
  }
  
  create() {
    this.scene.add('Train', Train, true, { x: 0, y: 0 });

    const logo = this.add.image(640, 300, "logo");

    const leftArrow = this.input.keyboard.addKey('W')
    leftArrow.on('down', () => {
      logo.x = Math.max(logo.x - 430, 210)
    })
  
    const rightArrow = this.input.keyboard.addKey('E')
    rightArrow.on('down', () => {
      logo.x = Math.min(logo.x + 430, 1070)
    })
  
    this.setupLevel(this, levels[0], this.passengersArr)
  }
  
  update() {
    for(const passengerSprite of this.passengersArr) {
      passengerSprite.body.velocity.y = -100
    }
  }
  
  setupLevel (
    game,
    { rowOnePassengers, rowTwoPassengers, rowThreePassengers }
  ) {
  
    for(const passengerTime of rowOnePassengers) {
      setTimeout(() => {
        const logo = game.add.image(210, 500 + Math.random() * 100, 'logo')
        logo.scale = 0.2
        this.passengersArr.push(logo)
        game.physics.add.existing(logo);
      },passengerTime)
    }
    for(const passengerTime of rowTwoPassengers) {
      setTimeout(() => {
        const logo = game.add.image(640, 500 + Math.random() * 100, 'logo')
        logo.scale = 0.2
        this.passengersArr.push(logo)
        game.physics.add.existing(logo);
      },passengerTime)
    }
    for(const passengerTime of rowThreePassengers) {
      setTimeout(() => {
        const logo = game.add.image(1070, 500 + Math.random() * 100, 'logo')
        logo.scale = 0.2
        this.passengersArr.push(logo)
        game.physics.add.existing(logo);
      },passengerTime)
    }
  }
}

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 1280,
  height: 720,
  scene: Boot,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 0 }
    }
},
  scaleMode: Phaser.Scale.ScaleManager.AUTO
};

const game = new Phaser.Game(config);
