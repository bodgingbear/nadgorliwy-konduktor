export default class Conductor {
  public currentRow: number;

  public constructor() {
    this.currentRow = 2;
  }

  public goLeft(): void {
    console.log(this.currentRow - 1);

    this.currentRow = Math.max(this.currentRow - 1, 1);
  }

  public goRight(): void {
    console.log(this.currentRow + 1);

    this.currentRow = Math.min(this.currentRow + 1, 3);
  }
}
