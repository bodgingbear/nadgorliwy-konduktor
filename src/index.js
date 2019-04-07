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
    this.startTime = new Date();
    this.trainLeft = false;
  }

  addToScore(points = 10) {
    this.score += points * this.combo++;

    this.scoreText.setText(`Score:  ${this.score}`);
    this.comboText.setText(`Combo  x${this.combo}`);
  }

  trainLeave() {
    this.trainLeft = true;
    this.trainDoor.anims.restart();

    const tween = this.tweens.add({
      targets: [
        this.trainInterior,
        this.trainExterior,
        this.trainDoor
      ],
      x: this.cameras.main.width,               // '+=100'
      y: 0,               // '+=100'
      ease: 'Cubic',       // 'Cubic', 'Elastic', 'Bounce', 'Back'
      duration: 500,
      repeat: 0,            // -1: infinity
      yoyo: false
    });
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
    this.background = this.add.sprite(0, 0, "trainBG")
    this.background.setOrigin(0, 0);
    this.background.setScale(5);
  
    this.trainInterior = this.add.sprite(-this.cameras.main.width, 0, "trainInterior")
    this.trainInterior.setOrigin(0, 0);
    this.trainInterior.setScale(5);
  
    this.trainExterior = this.add.sprite(-this.cameras.main.width, 0, "trainExterior")
    this.trainExterior.setOrigin(0, 0);
    this.trainExterior.setScale(5);

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
      key: 'door-close',
      frames: [
        { key: 'trainDoorAnim5' },
        { key: 'trainDoorAnim4' },
        { key: 'trainDoorAnim3' },
        { key: 'trainDoorAnim2' },
        { key: 'trainDoorAnim1' },
        { key: 'trainDoorAnim0' },
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
  
    this.trainDoor = this.add.sprite(-this.cameras.main.width, 0, "trainDoorAnim0")
    this.trainDoor.setOrigin(0, 0);
    this.trainDoor.setScale(5);

    this.progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0xffffff, 0.8);
    progressBox.fillRect(24, 400 + 270 - 24, 320, 50);

    this.progressBar.fillStyle(0xffffff, 0.8);

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

    const keyShoot = this.input.keyboard.addKey('Q')
    keyShoot.on('down', () => {
      const newPassengerArr = []
      let hasDeleted = false

      for(let i in this.passengersArr) {
        const passengerSprite = this.passengersArr[i]
        if(hasDeleted) {
          newPassengerArr.push(passengerSprite)
          continue
        }

        if(!passengerSprite.body)
          continue

        if(
          passengerSprite.body.x >= conductor.x - 150
          && passengerSprite.body.x <= conductor.x + 150
          && passengerSprite.body.y <= 310
        ) {
            console.log('destroy')
            passengerSprite.destroy()
            hasDeleted = true
            continue
        }

        newPassengerArr.push(passengerSprite)
      }

      this.passengersArr = newPassengerArr
    })


    this.firstTween = this.tweens.add({
      targets: [
        this.trainInterior,
        this.trainExterior,
        this.trainDoor
      ],
      x: 0,
      y: 0,
      ease: 'Cubic',
      duration: 1000,
      // repeat: 0,
      // yoyo: false,
      onComplete: () => {
        this.trainDoor.play('door-open');
        this.setupLevel(this, levels[3], this.passengersArr)
      }
    });
  }

  update() {
    for(const passengerSprite of this.passengersArr) {
      if(!passengerSprite.body)
        continue

      if (passengerSprite.body.y < 230 || this.trainLeft) {
        passengerSprite.body.velocity.y = 0;
      } else {
        passengerSprite.body.velocity.y = -200;
      }
    }

    const timeElapsed = new Date() - this.startTime;
    // const percentageOfTimeToLeave = timeElapsed / 2000;
    const percentageOfTimeToLeave = timeElapsed / (levels[3].timeToLeave * 1000);
    this.progressBar.fillRect(34, 400 + 280 - 24, 300 * Math.min(1, percentageOfTimeToLeave), 30);

    if (percentageOfTimeToLeave > 1) {
      this.trainLeave();
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
  scale: {
    parent: 'yourgamediv',
    mode: Phaser.Scale.FIT,
    width: 1280,
    height: 720,
  },
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
        gravity: { y: 0 }
    }
  },
};

const game = new Phaser.Game(config);
