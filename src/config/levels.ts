import { playerType } from '../objects/Passenger';

interface Level {
  '#': number;
  rowOnePassengers: ({ time: number; playerType: playerType })[];
  rowTwoPassengers: ({ time: number; playerType: playerType })[];
  rowThreePassengers: ({ time: number; playerType: playerType })[];
  timeToLeave: number;
}

export const levels: Level[] = [
  {
    '#': 1,
    rowOnePassengers: [
    ],
    rowTwoPassengers: [
      { time: 3700, playerType: playerType.Man },
      { time: 4800, playerType: playerType.Man },
    ],
    rowThreePassengers: [
      { time: 900, playerType: playerType.Man },
      { time: 1800, playerType: playerType.Man },
    ],
    timeToLeave: 10,
  },
  {
    '#': 2,
    rowOnePassengers: [
      { time: 800, playerType: playerType.Man },
      { time: 2800, playerType: playerType.Man },
    ],
    rowTwoPassengers: [
      { time: 1900, playerType: playerType.Man },
      { time: 2700, playerType: playerType.Man },
    ],
    rowThreePassengers: [
      { time: 1000, playerType: playerType.Man },
      { time: 1800, playerType: playerType.Man },
    ],
    timeToLeave: 9,
  },
  {
    '#': 3,
    rowOnePassengers: [
      { time: 1800, playerType: playerType.Man },
      { time: 2800, playerType: playerType.Man },
      { time: 3200, playerType: playerType.Man },
    ],
    rowTwoPassengers: [
      { time: 600, playerType: playerType.Man },
      { time: 1700, playerType: playerType.Man },
      { time: 3000, playerType: playerType.Man },
      { time: 3500, playerType: playerType.Man },
      { time: 3700, playerType: playerType.Man },
    ],
    rowThreePassengers: [
      { time: 1000, playerType: playerType.Man },
      { time: 1800, playerType: playerType.Man },
      { time: 2200, playerType: playerType.Man },
      { time: 2900, playerType: playerType.Man },
      { time: 3600, playerType: playerType.Man },
    ],
    timeToLeave: 9,
  },
  {
    '#': 4,
    rowOnePassengers: [
      { time: 2800, playerType: playerType.Man },
      { time: 3000, playerType: playerType.Man },
      { time: 3700, playerType: playerType.Sumo },
      { time: 4100, playerType: playerType.Man },
    ],
    rowTwoPassengers: [
      { time: 600, playerType: playerType.Man },
      { time: 1000, playerType: playerType.Man },
      { time: 1200, playerType: playerType.Man },
      { time: 3000, playerType: playerType.Man },
      { time: 3500, playerType: playerType.Man },
      { time: 3700, playerType: playerType.Man },
    ],
    rowThreePassengers: [
      { time: 300, playerType: playerType.Man },
      { time: 600, playerType: playerType.Man },
      { time: 1200, playerType: playerType.Man },
      { time: 3500, playerType: playerType.Man },
      { time: 4800, playerType: playerType.Man },
    ],
    timeToLeave: 10,
  },
  {
    '#': 5,
    rowOnePassengers: [
      { time: 800, playerType: playerType.Man },
      { time: 3000, playerType: playerType.Man },
      { time: 3700, playerType: playerType.Sumo },
      { time: 4100, playerType: playerType.Man },
      { time: 6500, playerType: playerType.Man },
      { time: 6900, playerType: playerType.Man },
      { time: 7500, playerType: playerType.Man },
    ],
    rowTwoPassengers: [
      { time: 300, playerType: playerType.Man },
      { time: 3700, playerType: playerType.Sumo },
      { time: 2500, playerType: playerType.Man },
      { time: 3500, playerType: playerType.Man },
      { time: 3700, playerType: playerType.Man },
      { time: 5900, playerType: playerType.Man },
    ],
    rowThreePassengers: [
      { time: 600, playerType: playerType.Man },
      { time: 1700, playerType: playerType.Man },
      { time: 3500, playerType: playerType.Man },
      { time: 4800, playerType: playerType.Man },
      { time: 6400, playerType: playerType.Man },
    ],
    timeToLeave: 10,
  },
];
