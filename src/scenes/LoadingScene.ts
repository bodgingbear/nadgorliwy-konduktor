import GameDataManager from '../objects/GameDataManager';

import { createAnimation } from '../utils/createAnimation';

import * as passengerSound from '../assets/audio/passenger.wav';
import * as gatesSound from '../assets/audio/gates.wav';
import * as sumoSound from '../assets/audio/sumo.wav';
import * as bijSound from '../assets/audio/bij.mp3';
import * as stationSound from '../assets/audio/station.mp3';

import * as trainBGImg from '../assets/images/pixil-layer-Background.png';
import * as trainInteriorImg from '../assets/images/pixil-layer-Train-interior.png';
import * as trainExteriorImg from '../assets/images/pixil-layer-Train.png';

import * as trainDoorAnim0Img from '../assets/images/pixil-metro0.png';
import * as trainDoorAnim1Img from '../assets/images/pixil-metro1.png';
import * as trainDoorAnim2Img from '../assets/images/pixil-metro2.png';
import * as trainDoorAnim3Img from '../assets/images/pixil-metro3.png';
import * as trainDoorAnim4Img from '../assets/images/pixil-metro4.png';
import * as trainDoorAnim5Img from '../assets/images/pixil-metro5.png';

import * as passenger1anim0Img from '../assets/images/pixil-layer-P1-0.png';
import * as passenger1anim1Img from '../assets/images/pixil-layer-P1-1.png';

import * as passenger2anim0Img from '../assets/images/pixil-layer-P2-0.png';
import * as passenger2anim1Img from '../assets/images/pixil-layer-P2-1.png';

import * as conductorAnim0Img from '../assets/images/pixil-layer-Conductor-0.png';
import * as conductorAnim1Img from '../assets/images/pixil-layer-Conductor-1.png';

import * as sumoAnim0Img from '../assets/images/pixil-layer-Sumo-0.png';
import * as sumoAnim1Img from '../assets/images/pixil-layer-Sumo-1.png';

export default class BootScene extends Phaser.Scene {
  private introImage: Phaser.GameObjects.Sprite;

  private timesLooped: number;

  private animStopped: boolean;

  public constructor() {
    super({
      key: 'LoadingScene',
    });

    this.timesLooped = 0;
    this.animStopped = false;
  }

  private showLoadingAnimation(): void {
    this.anims.create(createAnimation(
      'intro',
      10,
      'introFrame',
      {
        frameRate: 10,
        repeat: 0,
      },
    ));

    this.anims.create(createAnimation(
      'intro-loop',
      2,
      'introFrame1',
      {
        frameRate: 3,
        repeat: -1,
      },
    ));

    this.introImage = this.add.sprite(0, 0, 'introFrame0');
    this.introImage.setOrigin(0, 0);
    this.introImage.setDisplaySize(this.cameras.main.width, this.cameras.main.height);

    this.introImage.anims.play('intro');
    this.introImage.anims.chain('intro-loop');

    this.introImage.on('animationrepeat', (animation: Phaser.Animations.Animation): void => {
      if (animation.key === 'intro-loop') {
        this.timesLooped += 1;
      }
    }, this);
  }

  public preload(): void {
    this.showLoadingAnimation();

    this.load.image('trainBG', trainBGImg);
    this.load.image('trainInterior', trainInteriorImg);
    this.load.image('trainExterior', trainExteriorImg);

    this.load.image('trainDoorAnim0', trainDoorAnim0Img);
    this.load.image('trainDoorAnim1', trainDoorAnim1Img);
    this.load.image('trainDoorAnim2', trainDoorAnim2Img);
    this.load.image('trainDoorAnim3', trainDoorAnim3Img);
    this.load.image('trainDoorAnim4', trainDoorAnim4Img);
    this.load.image('trainDoorAnim5', trainDoorAnim5Img);

    this.load.image('passenger1anim0', passenger1anim0Img);
    this.load.image('passenger1anim1', passenger1anim1Img);

    this.load.image('passenger2anim0', passenger2anim0Img);
    this.load.image('passenger2anim1', passenger2anim1Img);

    this.load.image('conductorAnim0', conductorAnim0Img);
    this.load.image('conductorAnim1', conductorAnim1Img);

    this.load.image('sumoAnim0', sumoAnim0Img);
    this.load.image('sumoAnim1', sumoAnim1Img);
    this.load.audio('theme', [stationSound]);
    this.load.audio('bij', [bijSound]);
    this.load.audio('sumo', [sumoSound]);
    this.load.audio('passenger', [passengerSound]);
    this.load.audio('gates', [gatesSound]);
  }

  public create(): void {
    const gdm = new GameDataManager();
    this.registry.set('gdm', gdm);

    this.anims.create(createAnimation(
      'door-open',
      6,
      'trainDoorAnim',
      {
        frameRate: 30,
        repeat: 0,
      },
    ));

    this.anims.create(createAnimation(
      'passenger1anim',
      2,
      'passenger1anim',
      {
        frameRate: 8,
        repeat: -1,
      },
    ));

    this.anims.create(createAnimation(
      'passenger2anim',
      2,
      'passenger2anim',
      {
        frameRate: 8,
        repeat: -1,
      },
    ));

    this.anims.create(createAnimation(
      'sumoAnim',
      2,
      'sumoAnim',
      {
        frameRate: 8,
        repeat: -1,
      },
    ));

    this.anims.create(createAnimation(
      'conductorAnim',
      2,
      'conductorAnim',
      {
        frameRate: 8,
        repeat: -1,
      },
    ));
  }

  private playEndingAnimation(): void {
    this.animStopped = true;
    this.introImage.anims.stop();
    this.introImage.anims.playReverse('intro');
    this.introImage.on('animationcomplete', (): void => {
      this.scene.start('GameScene');
      this.scene.start('MainMenuScene');
      this.scene.bringToTop('MainMenuScene');
    }, this);
  }

  public update(): void {
    if (!this.animStopped && this.timesLooped > 2) {
      this.playEndingAnimation();
    }
  }
}
