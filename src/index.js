import Phaser from "phaser";
import logoImg from "./assets/logo.png";

import { levels } from './levels'

const config = {
  type: Phaser.AUTO,
  parent: "phaser-example",
  width: 1280,
  height: 720,
  scene: {
    preload: preload,
    create: create,
    update: update
  },
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 0 }
    }
},
  scaleMode: Phaser.Scale.ScaleManager.AUTO
};

const game = new Phaser.Game(config);

const passengersArr = []

function preload() {
  this.load.image("logo", logoImg);
}

function create() {
  const logo = this.add.image(640, 300, "logo");

  this.tweens.add({
    targets: logo,
    y: 450,
    duration: 2000,
    ease: "Power2",
    yoyo: true,
    loop: -1
  });


  const leftArrow = this.input.keyboard.addKey('W')
  leftArrow.on('down', () => {
    logo.x = Math.max(logo.x - 430, 210)
  })

  const rightArrow = this.input.keyboard.addKey('E')
  rightArrow.on('down', () => {
    logo.x = Math.min(logo.x + 430, 1070)
  })

  setupLevel(this, levels[0], passengersArr)
}

function update() {
  for(const passengerSprite of passengersArr) {
    passengerSprite.body.velocity.y = -100
  }
}

function setupLevel (
  game,
  {rowOnePassengers, rowTwoPassengers, rowThreePassengers},
  passengersArr
) {

  for(const passengerTime of rowOnePassengers) {
    setTimeout(() => {
      const logo = game.add.image(210, 500 + Math.random() * 100, 'logo')
      logo.scale = 0.2
      passengersArr.push(logo)
      game.physics.add.existing(logo);
    },passengerTime)
  }
  for(const passengerTime of rowTwoPassengers) {
    setTimeout(() => {
      const logo = game.add.image(640, 500 + Math.random() * 100, 'logo')
      logo.scale = 0.2
      passengersArr.push(logo)
      game.physics.add.existing(logo);
    },passengerTime)
  }
  for(const passengerTime of rowThreePassengers) {
    setTimeout(() => {
      const logo = game.add.image(1070, 500 + Math.random() * 100, 'logo')
      logo.scale = 0.2
      passengersArr.push(logo)
      game.physics.add.existing(logo);
    },passengerTime)
  }
}