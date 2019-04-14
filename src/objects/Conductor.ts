import Passenger from './Passenger';

export default class Conductor extends Phaser.GameObjects.Sprite {
  private currentRow: number;

  public constructor(
    scene: Phaser.Scene,
    x: number,
    y: number,
  ) {
    super(scene, x, y, 'conductorAnim0');
    this.currentRow = 2;

    this.setOrigin(0, 1);
    this.setScale(5);
    this.scene.add.existing(this);

    this.play('conductorAnim');
  }

  public goLeft(): void {
    this.currentRow = Math.max(this.currentRow - 1, 1);

    this.x = (this.currentRow - 1) * 430 + 210;
  }

  public goRight(): void {
    this.currentRow = Math.min(this.currentRow + 1, 3);

    this.x = (this.currentRow - 1) * 430 + 210;
  }


  public areOnTheSameRow(passenger: Passenger): boolean {
    return this.currentRow === passenger.row;
  }
}
