export enum playerType {
  Man = 'Man',
  Man1 = 'Man1',
  Man2 = 'Man2',
  Sumo = 'Sumo'
}

export default class Passenger extends Phaser.GameObjects.Sprite {
  public hp: number;

  public initialHp: number;

  public row: number;

  public rect: Phaser.GameObjects.Graphics;

  public playerType: playerType;

  private animation: string;

  public constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    type: playerType,
    row: number,
  ) {
    const { sprite, animation } = Passenger.getSpriteKey(type);
    super(scene, x, y, sprite);

    this.playerType = type;
    this.animation = animation;
    this.row = row;

    this.setHp();

    this.init();
  }

  private init(): void {
    this.scene.add.existing(this);
    this.setScale(5);
    this.scene.physics.add.existing(this);

    if (this.animation) {
      this.play(this.animation);
    }
  }

  public showAndOneText(n: number): void {
    const andOneText = this.scene.add.text(
      this.x + 50,
      this.y,
      `+${n}`,
      {
        fontSize: '24px',
        fill: '#fff',
        fontFamily: 'Pixel miners',
      },
    );

    this.scene.tweens.add({
      targets: andOneText,
      x: this.x + 50,
      y: this.y - 50,
      alpha: 0,
      ease: 'Cubic',
      duration: 1000,
      delay: 0,
      repeat: 0,
      yoyo: false,
      onComplete: (): void => {
        andOneText.destroy();
      },
    });
  }

  private setHp(): void {
    switch (this.playerType) {
      case playerType.Man:
      case playerType.Man1:
      case playerType.Man2:
        this.initialHp = 2;
        this.hp = 2;
        break;
      case playerType.Sumo:
        this.initialHp = 10;
        this.hp = 10;
        break;
      // no default
    }
  }

  private static getSpriteKey(type: playerType): { sprite: string; animation: string } {
    switch (type) {
      case playerType.Man:
        return Phaser.Math.Between(1, 2) === 1
          ? Passenger.getSpriteKey(playerType.Man1)
          : Passenger.getSpriteKey(playerType.Man2);
      case playerType.Man1:
        return {
          sprite: 'passenger1anim0',
          animation: 'passenger1anim',
        };
      case playerType.Man2:
        return {
          sprite: 'passenger2anim0',
          animation: 'passenger2anim',
        };
      case playerType.Sumo:
        return {
          sprite: 'sumoAnim0',
          animation: 'sumoAnim',
        };
      // no default
    }

    throw new Error('No player sprite with specified type exists');
  }
}
