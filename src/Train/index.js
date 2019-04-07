import Phaser from "phaser";

import trainBGImg from "../assets/pixil-layer-Background.png";
import trainInteriorImg from "../assets/pixil-layer-Train-interior.png";
import trainExteriorImg from "../assets/pixil-layer-Train.png";

import trainDoorAnim0Img from "../assets/pixil-metro0.png";
import trainDoorAnim1Img from "../assets/pixil-metro1.png";
import trainDoorAnim2Img from "../assets/pixil-metro2.png";
import trainDoorAnim3Img from "../assets/pixil-metro3.png";
import trainDoorAnim4Img from "../assets/pixil-metro4.png";
import trainDoorAnim5Img from "../assets/pixil-metro5.png";

export default class Train extends Phaser.Scene {
  preload() {
    this.load.image("trainBG", trainBGImg);
    this.load.image("trainInterior", trainInteriorImg);
    this.load.image("trainExterior", trainExteriorImg);
  
    this.load.image("trainDoorAnim0", trainDoorAnim0Img);
    this.load.image("trainDoorAnim1", trainDoorAnim1Img);
    this.load.image("trainDoorAnim2", trainDoorAnim2Img);
    this.load.image("trainDoorAnim3", trainDoorAnim3Img);
    this.load.image("trainDoorAnim4", trainDoorAnim4Img);
    this.load.image("trainDoorAnim5", trainDoorAnim5Img);
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
  
    const trainDoor = this.add.sprite(0, 0, "trainDoorAnim0")
    trainDoor.setOrigin(0, 0);
    trainDoor.setScale(5);
    trainDoor.play('door-open');
  }
  
  update() {
  }
}

