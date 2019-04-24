import 'phaser';
import LoadingScene from './scenes/LoadingScene';
import BootScene from './scenes/BootScene';
import GameScene from './scenes/GameScene';
import HUDScene from './scenes/HUDScene';
import MainMenuScene from './scenes/MainMenuScene';
import GameOverScene from './scenes/GameOverScene';

import './styles/styles.css';

const config: GameConfig = {
  type: Phaser.AUTO,
  parent: 'game',
  title: GAME_TITLE,
  version: GAME_VERSION,
  banner: true,
  width: 1280,
  height: 720,
  scene: [BootScene, LoadingScene, GameScene, HUDScene, MainMenuScene, GameOverScene],
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
