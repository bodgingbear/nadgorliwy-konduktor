import 'phaser';
import GameScene from './scenes/GameScene';
import BootScene from './scenes/BootScene';
import HUDScene from './scenes/HUDScene';

import './styles/styles.css';

const config: GameConfig = {
  type: Phaser.AUTO,
  parent: 'game',
  title: GAME_TITLE,
  version: GAME_VERSION,
  banner: true,
  width: 1280,
  height: 720,
  scene: [BootScene, GameScene, HUDScene],
  scale: {
    parent: 'game',
    mode: Phaser.Scale.FIT,
    width: 1280,
    height: 720,
  },
  zoom: 5,
  pixelArt: true,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
    },
  },
};

export default class Game extends Phaser.Game {}

window.addEventListener('load', (): Game => new Game(config));
