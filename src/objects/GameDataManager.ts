import { levels } from '../config/levels';

export default class GameDataManager {
  public currentLevel: number;

  public score: number;

  public highScore: number;

  public hp: number;

  public combo: number;

  public startTime: number;

  public isGameRunning: boolean;

  public constructor() {
    this.currentLevel = 0;
    this.score = 0;
    this.combo = 1;
    this.hp = 3;
    this.highScore = Number(localStorage.getItem('hs'));
    this.isGameRunning = false;
  }

  public nextLevel(): void {
    this.currentLevel += 1;
  }

  public setCurrentLevel(n: number): void {
    this.currentLevel = n;
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

    const pottlNumerator = timeElapsed;
    const pottlDenominator = (levels[this.currentLevel].timeToLeave * 1000);
    const percentageOfTimeToLeave = pottlNumerator / pottlDenominator;

    return percentageOfTimeToLeave;
  }

  public startPlaying(): void {
    this.isGameRunning = true;
  }
}
