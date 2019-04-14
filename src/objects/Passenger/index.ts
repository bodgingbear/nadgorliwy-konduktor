export enum playerType {
  Man,
  Man1,
  Man2,
  Sumo
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
    /* eslint-disable no-this-before-super */
    const { sprite, animation } = Passenger.getSpriteKey(type);
    super(scene, x, y, sprite);

    this.playerType = type;
    this.animation = animation;
    this.row = row;

    this.setHp();

    this.init();
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

  private init(): void {
    this.scene.add.existing(this);
    this.setScale(5);
    this.scene.physics.add.existing(this);

    if (this.animation) {
      this.play(this.animation);
    }
  }
}
