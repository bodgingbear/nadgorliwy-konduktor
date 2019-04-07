import Phaser from "phaser";
import trainBGImg from "./assets/pixil-layer-Background.png";
import trainInteriorImg from "./assets/pixil-layer-Train-interior.png";
import trainExteriorImg from "./assets/pixil-layer-Train.png";

import trainDoorAnim0Img from "./assets/pixil-metro0.png";
import trainDoorAnim1Img from "./assets/pixil-metro1.png";
import trainDoorAnim2Img from "./assets/pixil-metro2.png";
import trainDoorAnim3Img from "./assets/pixil-metro3.png";
import trainDoorAnim4Img from "./assets/pixil-metro4.png";
import trainDoorAnim5Img from "./assets/pixil-metro5.png";

import passenger1anim0Img from "./assets/pixil-layer-P1-0.png";
import passenger1anim1Img from "./assets/pixil-layer-P1-1.png";

import conductorAnim0Img from "./assets/pixil-layer-Conductor-0.png";
import conductorAnim1Img from "./assets/pixil-layer-Conductor-1.png";

import { createPassenger } from './Passenger';

import { levels } from './levels'
import p1 from "./assets/pixil-layer-P1.png";

class Boot extends Phaser.Scene {
  constructor(config) {
    super(config);
    this.passengersArr = []
    this.score = 0;
    this.combo = 1;

    window.addToScore = this.addToScore.bind(this);
  }

  addToScore(points = 10) {
    this.score += points * this.combo++;

    this.scoreText.setText(`Score:  ${this.score}`);
    this.comboText.setText('Combo  x' + this.combo);
  }

  preload() {
    this.load.image("logo", p1);
    this.load.image("trainBG", trainBGImg);
    this.load.image("trainInterior", trainInteriorImg);
    this.load.image("trainExterior", trainExteriorImg);
  
    this.load.image("trainDoorAnim0", trainDoorAnim0Img);
    this.load.image("trainDoorAnim1", trainDoorAnim1Img);
    this.load.image("trainDoorAnim2", trainDoorAnim2Img);
    this.load.image("trainDoorAnim3", trainDoorAnim3Img);
    this.load.image("trainDoorAnim4", trainDoorAnim4Img);
    this.load.image("trainDoorAnim5", trainDoorAnim5Img);

    this.load.image("passenger1anim0", passenger1anim0Img);
    this.load.image("passenger1anim1", passenger1anim1Img);

    this.load.image("conductorAnim0", conductorAnim0Img);
    this.load.image("conductorAnim1", conductorAnim1Img);
  }
  
  create() {
    const background = this.add.sprite(0, 0, "trainBG")
    background.setOrigin(0, 0);
    background.setScale(5);
  
    const trainInterior = this.add.sprite(0, 0, "trainInterior")
    trainInterior.setOrigin(0, 0);
    trainInterior.setScale(5);
  
    const trainExterior = this.add.sprite(0, 0, "trainExterior")
    trainExterior.setOrigin(0, 0);
    trainExterior.setScale(5);
  
    this.anims.create({
      key: 'door-open',
      frames: [
        { key: 'trainDoorAnim0' },
        { key: 'trainDoorAnim1' },
        { key: 'trainDoorAnim2' },
        { key: 'trainDoorAnim3' },
        { key: 'trainDoorAnim4' },
        { key: 'trainDoorAnim5' },
      ],
      frameRate: 8,
      repeat: 0
    });
  
    this.anims.create({
      key: 'passenger1anim',
      frames: [
        { key: 'passenger1anim0' },
        { key: 'passenger1anim1' },
      ],
      frameRate: 8,
      repeat: -1
    });
  
    this.anims.create({
      key: 'conductorAnim',
      frames: [
        { key: 'conductorAnim0' },
        { key: 'conductorAnim1' },
      ],
      frameRate: 8,
      repeat: -1
    });
  
    const trainDoor = this.add.sprite(0, 0, "trainDoorAnim0")
    trainDoor.setOrigin(0, 0);
    trainDoor.setScale(5);
    trainDoor.play('door-open');

    this.scoreText = this.add.text(
      16,
      16,
      'Score:  ' + this.score,
      {
        fontSize: '32px',
        fill: '#fff',
        fontFamily: 'Pixel miners'
      }
    );

    this.comboText = this.add.text(
      this.cameras.main.width - 16,
      16,
      'Combo  x' + this.combo,
      {
        fontSize: '32px',
        fill: '#fff',
        fontFamily: 'Pixel miners'
      }
    );
    this.comboText.setOrigin(1, 0);

    const conductor = this.add.sprite(640, this.cameras.main.height - 50, "conductorAnim0");
    conductor.setOrigin(0, 1);
    conductor.setScale(5);
    conductor.play('conductorAnim');

    const { left: leftArrow, right: rightArrow } = this.input.keyboard.createCursorKeys();

    leftArrow.on('down', () => {
      conductor.x = Math.max(conductor.x - 430, 210)
    })
  
    rightArrow.on('down', () => {
      conductor.x = Math.min(conductor.x + 430, 1070)
    })
  
    this.setupLevel(this, levels[0], this.passengersArr)
  }
  
  update() {
    for(const passengerSprite of this.passengersArr) {
      if (passengerSprite.body.y < 230) {
        passengerSprite.body.velocity.y = 0;
      } else {
        passengerSprite.body.velocity.y = -100;
      }
    }
  }
  
  setupLevel (
    game,
    { rowOnePassengers, rowTwoPassengers, rowThreePassengers }
  ) {
  
    for(const passengerTime of rowOnePassengers) {
      setTimeout(() => {
        const passenger = createPassenger(game, 210 + Math.random() * 100 - 50, 800 + Math.random() * 100, 'passenger1anim0', 'passenger1anim');
        this.passengersArr.push(passenger);
      }, passengerTime)
    }
    for(const passengerTime of rowTwoPassengers) {
      setTimeout(() => {
        const passenger = createPassenger(game, 640 + Math.random() * 100 - 50, 800 + Math.random() * 100, 'passenger1anim0', 'passenger1anim');
        this.passengersArr.push(passenger);
      }, passengerTime)
    }
    for(const passengerTime of rowThreePassengers) {
      setTimeout(() => {
        const passenger = createPassenger(game, 1070 + Math.random() * 100 - 50, 800 + Math.random() * 100, 'passenger1anim0', 'passenger1anim');
        this.passengersArr.push(passenger);
      }, passengerTime)
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
};

const game = new Phaser.Game(config);
