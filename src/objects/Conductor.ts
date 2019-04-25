import Passenger from './Passenger';

export default class Conductor extends Phaser.GameObjects.Sprite {
  private currentRow: number;

  public constructor(
    scene: Phaser.Scene,
    initialRow: number,
    y: number,
  ) {
    const x = (initialRow - 1) * 430 + 210;
    super(scene, x, y, 'conductorAnim0');
    this.currentRow = initialRow;

    this.setOrigin(0, 1);
    this.setScale(5);
    this.scene.add.existing(this);

    this.play('conductorAnim');
  }

  public goLeft(): number {
    this.currentRow = Math.max(this.currentRow - 1, 1);

    this.x = (this.currentRow - 1) * 430 + 210;

    return this.currentRow;
  }

  public goRight(): number {
    this.currentRow = Math.min(this.currentRow + 1, 3);

    this.x = (this.currentRow - 1) * 430 + 210;

    return this.currentRow;
  }


  public areOnTheSameRow(passenger: Passenger): boolean {
    return this.currentRow === passenger.row;
  }
}
