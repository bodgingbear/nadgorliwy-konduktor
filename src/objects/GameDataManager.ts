import { Level } from '../config/levels';

export default class GameDataManager {
  public currentLevelNumber: number;

  public score: number;

  public highScore: number;

  public hp: number;

  public combo: number;

  public startTime: number;

  public isGameRunning: boolean;

  public conductorRow: number;

  public currentLevel: Level;

  public constructor() {
    this.currentLevelNumber = 0;
    this.currentLevel = null;
    this.score = 0;
    this.combo = 1;
    this.hp = 3;
    this.highScore = Number(localStorage.getItem('hs'));
    this.isGameRunning = false;
    this.conductorRow = 2;
  }

  public nextLevel(): void {
    this.currentLevelNumber += 1;
  }

  public setCurrentLevel(level: Level): void {
    this.currentLevel = level;
  }

  public setStartTime(t: number): void {
    this.startTime = t;
  }

  public addToScore(points: number): number {
    const combo = this.increaseCombo();
    const s = points * combo;

    this.score += s;
    this.highScore = Math.max(this.highScore, this.score);
    localStorage.setItem('hs', String(this.highScore));

    return this.score;
  }

  public dealDamage(damage: number): void {
    this.hp -= damage;

    if (damage > 0) {
      this.combo = 1;
    }
  }

  public increaseCombo(n: number = 1): number {
    this.combo += n;

    return this.combo;
  }

  public setHp(hp: number): void {
    this.hp = hp;
  }

  public getPercentageOfTimeElapsed(): number {
    const timeElapsed = Date.now() - this.startTime;

    if (!this.currentLevel) {
      return 0;
    }

    const pottlNumerator = timeElapsed;
    const { timeToLeave } = this.currentLevel;
    const percentageOfTimeToLeave = pottlNumerator / timeToLeave;

    return percentageOfTimeToLeave;
  }

  public startPlaying(): void {
    this.isGameRunning = true;
  }

  public setConductorRow(newRow: number): void {
    this.conductorRow = newRow;
  }
}
