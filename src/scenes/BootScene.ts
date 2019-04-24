import * as introFrame0 from '../assets/images/intro/intro_frame0.png';
import * as introFrame1 from '../assets/images/intro/intro_frame1.png';
import * as introFrame2 from '../assets/images/intro/intro_frame2.png';
import * as introFrame3 from '../assets/images/intro/intro_frame3.png';
import * as introFrame4 from '../assets/images/intro/intro_frame4.png';
import * as introFrame5 from '../assets/images/intro/intro_frame5.png';
import * as introFrame6 from '../assets/images/intro/intro_frame6.png';
import * as introFrame7 from '../assets/images/intro/intro_frame7.png';
import * as introFrame8 from '../assets/images/intro/intro_frame8.png';
import * as introFrame9 from '../assets/images/intro/intro_frame9.png';
import * as introFrame10 from '../assets/images/intro/intro_frame10.png';
import * as introFrame11 from '../assets/images/intro/intro_frame11.png';

export default class BootScene extends Phaser.Scene {
  public constructor() {
    super({
      key: 'BootScene',
    });
  }

  public preload(): void {
    this.load.image('introFrame0', introFrame0);
    this.load.image('introFrame1', introFrame1);
    this.load.image('introFrame2', introFrame2);
    this.load.image('introFrame3', introFrame3);
    this.load.image('introFrame4', introFrame4);
    this.load.image('introFrame5', introFrame5);
    this.load.image('introFrame6', introFrame6);
    this.load.image('introFrame7', introFrame7);
    this.load.image('introFrame8', introFrame8);
    this.load.image('introFrame9', introFrame9);
    this.load.image('introFrame10', introFrame10);
    this.load.image('introFrame11', introFrame11);
  }

  public create(): void {
    this.scene.start('LoadingScene');
  }
}
