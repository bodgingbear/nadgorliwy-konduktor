import GameDataManager from '../objects/GameDataManager';

export default class HUDScene extends Phaser.Scene {
  private scoreText: Phaser.GameObjects.Text;

  private hsText: Phaser.GameObjects.Text;

  private hpText: Phaser.GameObjects.Text;

  private levelText: Phaser.GameObjects.Text;

  private comboText: Phaser.GameObjects.Text;

  private progressBar: Phaser.GameObjects.Graphics;

  public constructor() {
    super({
      key: 'HUDScene',
    });
  }

  private get gdm(): GameDataManager {
    return this.registry.get('gdm');
  }

  private getScore(): number {
    return this.gdm.score;
  }

  private getHighScore(): number {
    return this.gdm.highScore;
  }

  private getHp(): number {
    return this.gdm.hp;
  }

  private getCombo(): number {
    return this.gdm.combo;
  }

  private getCurrentLevel(): number {
    return this.gdm.currentLevelNumber;
  }

  public create(): void {
    this.scoreText = this.add.text(
      16,
      16,
      `Score:  ${this.getScore()}`,
      {
        fontSize: '32px',
        fill: '#fff',
        fontFamily: 'Pixel miners',
      },
    );

    this.hsText = this.add.text(
      16,
      56,
      `High score:  ${this.getHighScore()}`,
      {
        fontSize: '32px',
        fill: '#fff',
        fontFamily: 'Pixel miners',
      },
    );

    this.hpText = this.add.text(
      this.cameras.main.width - 16,
      56,
      `HP:  ${Math.max(0, this.getHp())}`,
      {
        fontSize: '32px',
        fill: '#fff',
        fontFamily: 'Pixel miners',
      },
    );
    this.hpText.setOrigin(1, 0);

    // this.levelText = this.add.text(
    //   this.cameras.main.width - 16,
    //   96,
    //   `HP:  ${Math.max(0, this.getHp())}`,
    //   {
    //     fontSize: '32px',
    //     fill: '#fff',
    //     fontFamily: 'Pixel miners',
    //   },
    // );
    // this.levelText.setOrigin(1, 0);

    this.comboText = this.add.text(
      this.cameras.main.width - 16,
      16,
      `Combo  x${this.getCombo()}`,
      {
        fontSize: '32px',
        fill: '#fff',
        fontFamily: 'Pixel miners',
      },
    );
    this.comboText.setOrigin(1, 0);


    this.progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0xffffff, 0.8);
    progressBox.fillRect(24, 400 + 270 - 24, 320, 50);

    this.progressBar.fillStyle(0xffffff, 0.8);
  }

  public update(): void {
    const score = this.getScore();
    this.scoreText.setText(`Score:  ${score}`);
    this.hsText.setText(`High score:  ${this.getHighScore()}`);
    this.hpText.setText(`HP:  ${Math.max(0, this.getHp())}`);
    this.comboText.setText(`Combo  x${this.getCombo()}`);
    // this.levelText.setText(`Level  ${this.getCurrentLevel()}`);

    const percentageOfTimeToLeave = this.gdm.getPercentageOfTimeElapsed();

    this.progressBar.clear();
    this.progressBar.fillStyle(0xffffff, 0.8);
    this.progressBar.fillRect(34, 400 + 280 - 24, 300 * Math.min(1, percentageOfTimeToLeave), 30);

    if (this.getHp() <= 0) {
      this.scene.launch('GameOverScene');
      this.scene.bringToTop('GameOverScene');
    }
  }
}
