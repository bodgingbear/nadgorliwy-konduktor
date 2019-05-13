import { playerType } from './Passenger';
import { Level, Row } from '../config/levels';

interface Passenger {
  type: string;
  price: number;
  weight: number;
  timeToReach: number[];
}

export default class LevelsManager {
  private playerGenerator: Phaser.Math.RandomDataGenerator;

  private rowGenerator: Phaser.Math.RandomDataGenerator;

  private delaysGenerator: Phaser.Math.RandomDataGenerator;

  private passengerTypes: Passenger[];

  private allowedPassengers: string[];

  private level: number;

  private money: number;

  private timeToLeave: number;

  public constructor() {
    this.playerGenerator = new Phaser.Math.RandomDataGenerator();
    this.rowGenerator = new Phaser.Math.RandomDataGenerator();
    this.delaysGenerator = new Phaser.Math.RandomDataGenerator();

    this.passengerTypes = [
      {
        type: playerType.Man,
        price: 1,
        weight: 100,
        timeToReach: [100, 800],
      },
      {
        type: playerType.Sumo,
        price: 10,
        weight: 4,
        timeToReach: [1400, 1800],
      },
    ];

    this.allowedPassengers = [playerType.Man];

    this.level = 1;
    this.money = 5;
    this.timeToLeave = 10000;
  }

  private generatePassenger(money): {
    player: Passenger;
    moneySpent: number;
  } {
    const availablePassengers = this.passengerTypes
      .filter(({ type }): boolean => this.allowedPassengers.indexOf(type) >= 0)
      .filter(({ price }): boolean => price <= money);

    const weights = availablePassengers.reduce((acc, { weight }): number => weight + acc, 0);

    let pickedPassenger = null;
    let randomWeight = this.playerGenerator.integerInRange(1, weights);
    for (let i = 0; i < availablePassengers.length; i += 1) {
      const passenger = availablePassengers[i];

      randomWeight -= passenger.weight;
      pickedPassenger = passenger;

      if (randomWeight <= 0) {
        break;
      }
    }

    return {
      player: pickedPassenger,
      moneySpent: pickedPassenger.price,
    };
  }

  private generatePassengers(money, passengers = []): Passenger[] {
    if (money <= 0) {
      return passengers;
    }

    const { player, moneySpent } = this.generatePassenger(money);

    return this.generatePassengers(
      money - moneySpent,
      [
        ...passengers,
        player,
      ],
    );
  }

  public generateLevel(): Level {
    const { level } = this;

    // if (level % 3 === 0 && level > 0) {
      this.money += 2;
    // }

    if (level === 5) {
      this.allowedPassengers.push(playerType.Sumo);
    }

    const enemies = this.generatePassengers(this.money);

    console.log(enemies.map(({ type }): string => type));

    let ttl = 0;
    const rows: Row[] = enemies.map(({ type, timeToReach }): Row => {
      ttl += this.delaysGenerator.integerInRange(timeToReach[0], timeToReach[1]);

      return ({
        time: ttl,
        playerType: type as playerType,
      });
    });


    const finalRows = rows.reduce((acc: Row[][], passenger): Row[][] => {
      const selectedRow = this.rowGenerator.integerInRange(0, 2);
      return [
        [
          ...acc[0],
          ...(selectedRow === 0 ? [passenger] : []),
        ],
        [
          ...acc[1],
          ...(selectedRow === 1 ? [passenger] : []),
        ],
        [
          ...acc[2],
          ...(selectedRow === 2 ? [passenger] : []),
        ],
      ];
    }, [[], [], []]);

    const timeToLeave = Math.max(
      ...finalRows
        .map(
          (row): number => (row[row.length - 1] ? row[row.length - 1].time : 0),
        ),
    ) + 4000;

    const [
      rowOnePassengers,
      rowTwoPassengers,
      rowThreePassengers,
    ] = finalRows;

    console.log([
      rowOnePassengers,
      rowTwoPassengers,
      rowThreePassengers,
    ]);

    console.log(timeToLeave);

    this.level += 1;

    return {
      '#': level,
      rowOnePassengers,
      rowTwoPassengers,
      rowThreePassengers,
      timeToLeave,
    };
  }
}
