export default class Passenger extends Phaser.GameObjects.Sprite {
  public hp: number;

  public initialHp: number;

  public rect: Phaser.GameObjects.Graphics;

  private animation: string;

  public constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
    sprite: string,
    initialHp: number,
    animation?: string,
  ) {
    super(scene, x, y, sprite);

    this.hp = initialHp;
    this.initialHp = initialHp;
    this.animation = animation;

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
}
