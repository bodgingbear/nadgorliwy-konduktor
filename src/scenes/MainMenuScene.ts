import GameDataManager from '../objects/GameDataManager';

export default class MainMenuScene extends Phaser.Scene {
  private pressAnyKeyText: Phaser.GameObjects.Text;

  private titleText: Phaser.GameObjects.Text;

  public constructor() {
    super({
      key: 'MainMenuScene',
    });
  }

  public create(): void {
    this.titleText = this.add.text(
      this.cameras.main.centerX,
      100,
      'Nadgorliwy konduktor uciska\ntlum do pociagu',
      {
        fontSize: '48px',
        fill: '#fff',
        fontFamily: 'Pixel miners',
        align: 'center',
        lineSpacing: 10,
      },
    );
    this.titleText.setOrigin(0.5, 0.5);

    this.pressAnyKeyText = this.add.text(
      this.cameras.main.centerX,
      350,
      'Press any key to start',
      {
        fontSize: '32px',
        fill: '#fff',
        fontFamily: 'Pixel miners',
        align: 'center',
        lineSpacing: 10,
      },
    );
    this.pressAnyKeyText.setOrigin(0.5, 0.5);

    const { highScore } = this.registry.get('gdm') as GameDataManager;

    this.pressAnyKeyText = this.add.text(
      this.cameras.main.centerX,
      250,
      `High score: ${highScore}`,
      {
        fontSize: '32px',
        fill: '#fff',
        fontFamily: 'Pixel miners',
        align: 'center',
        lineSpacing: 10,
      },
    );
    this.pressAnyKeyText.setOrigin(0.5, 0.5);
  }
}
