import GameDataManager from '../objects/GameDataManager';

export default class GameOverScene extends Phaser.Scene {
  private scoreDescriptionText: Phaser.GameObjects.Text;

  private scoreText: Phaser.GameObjects.Text;

  private tryAgainTextUnderline: Phaser.GameObjects.Rectangle;

  private wasAgainHovered: boolean;

  public constructor() {
    super({
      key: 'GameOverScene',
    });

    this.wasAgainHovered = false;
  }

  public create(): void {
    this.cameras.main.backgroundColor.setTo(0, 0, 0, 255 * 0.6);

    const { score } = this.registry.get('gdm') as GameDataManager;

    this.scoreDescriptionText = this.add.text(
      this.cameras.main.centerX,
      this.cameras.main.centerY - 75,
      'Your score:',
      {
        fontSize: '48px',
        fill: '#fff',
        fontFamily: 'Pixel miners',
        align: 'center',
        lineSpacing: 10,
      },
    );
    this.scoreDescriptionText.setOrigin(0.5, 0.5);

    this.scoreText = this.add.text(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      String(score),
      {
        fontSize: '48px',
        fill: '#fff',
        fontFamily: 'Pixel miners',
        align: 'center',
        lineSpacing: 10,
      },
    );
    this.scoreText.setOrigin(0.5, 0.5);

    const tryAgainText = this.add.text(
      this.cameras.main.centerX,
      this.cameras.main.centerY + 75,
      'Try again',
      {
        fontSize: '48px',
        fill: '#fff',
        fontFamily: 'Pixel miners',
        align: 'center',
      },
    );
    tryAgainText.setOrigin(0.5, 0.5);
    tryAgainText.setInteractive();

    tryAgainText.on('pointerover', (): void => {
      this.wasAgainHovered = true;
    });

    tryAgainText.on('pointerout', (): void => {
      this.wasAgainHovered = false;
    });

    tryAgainText.on('pointerdown', (): void => {
      const gdm = new GameDataManager();
      this.registry.set('gdm', gdm);

      this.scene.stop('HUDScene');
      this.scene.stop('GameScene');

      this.game.canvas.style.cursor = 'default';

      this.scene.start('GameScene');
      this.scene.launch('MainMenuScene');
      this.scene.bringToTop('MainMenuScene');
    });

    const bounds = tryAgainText.getBounds();

    this.tryAgainTextUnderline = this.add.rectangle(
      bounds.centerX,
      bounds.bottom,
      bounds.width,
      4,
      0xffffff,
      0,
    );
  }

  public update(): void {
    if (this.wasAgainHovered) {
      this.tryAgainTextUnderline.setFillStyle(0xffffff, 1);
      this.game.canvas.style.cursor = 'pointer';
    } else {
      this.tryAgainTextUnderline.setFillStyle(0xffffff, 0);
      this.game.canvas.style.cursor = 'default';
    }
  }
}
