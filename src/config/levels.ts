import { playerType } from '../objects/Passenger';

export interface Row {
  time: number;
  playerType: playerType;
}

export interface Level {
  '#': number;
  rowOnePassengers: Row[];
  rowTwoPassengers: Row[];
  rowThreePassengers: Row[];
  timeToLeave: number;
}

export const levels: Level[] = [
  {
    '#': 0,
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
    '#': 1,
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
    timeToLeave: 10,
  },
  {
    '#': 3,
    rowOnePassengers: [
      { time: 1800, playerType: playerType.Man },
      { time: 3200, playerType: playerType.Man },
    ],
    rowTwoPassengers: [
      { time: 600, playerType: playerType.Man },
      { time: 1700, playerType: playerType.Sumo },
      { time: 3700, playerType: playerType.Man },
    ],
    rowThreePassengers: [
      { time: 1000, playerType: playerType.Man },
      { time: 3600, playerType: playerType.Man },
    ],
    timeToLeave: 10,
  },
  {
    '#': 4,
    rowOnePassengers: [
      { time: 1000, playerType: playerType.Man },
      { time: 3000, playerType: playerType.Man },
      { time: 4100, playerType: playerType.Man },
    ],
    rowTwoPassengers: [
      { time: 600, playerType: playerType.Man },
      { time: 3700, playerType: playerType.Sumo },
      { time: 3700, playerType: playerType.Man },
    ],
    rowThreePassengers: [
      { time: 300, playerType: playerType.Man },
      { time: 1200, playerType: playerType.Man },
      { time: 4800, playerType: playerType.Man },
    ],
    timeToLeave: 11,
  },
  {
    '#': 5,
    rowOnePassengers: [
      { time: 1000, playerType: playerType.Man },
      { time: 2100, playerType: playerType.Man },
      { time: 3000, playerType: playerType.Man },
      { time: 4100, playerType: playerType.Man },
    ],
    rowTwoPassengers: [
      { time: 600, playerType: playerType.Man },
      { time: 2000, playerType: playerType.Man },
      { time: 3700, playerType: playerType.Sumo },
      { time: 3800, playerType: playerType.Man },
    ],
    rowThreePassengers: [
      { time: 300, playerType: playerType.Man },
      { time: 1200, playerType: playerType.Man },
      { time: 4800, playerType: playerType.Man },
    ],
    timeToLeave: 11,
  },
  {
    '#': 6,
    rowOnePassengers: [
      { time: 1000, playerType: playerType.Man },
      { time: 2100, playerType: playerType.Man },
      { time: 3000, playerType: playerType.Man },
      { time: 3600, playerType: playerType.Man },
      { time: 4100, playerType: playerType.Man },
    ],
    rowTwoPassengers: [
      { time: 600, playerType: playerType.Man },
      { time: 2000, playerType: playerType.Man },
      { time: 3000, playerType: playerType.Man },
      { time: 3800, playerType: playerType.Man },
    ],
    rowThreePassengers: [
      { time: 300, playerType: playerType.Man },
      { time: 1200, playerType: playerType.Man },
      { time: 3000, playerType: playerType.Man },
      { time: 4800, playerType: playerType.Man },
    ],
    timeToLeave: 11,
  },
  {
    '#': 7,
    rowOnePassengers: [
      { time: 600, playerType: playerType.Man },
      { time: 2100, playerType: playerType.Man },
      { time: 3000, playerType: playerType.Man },
      { time: 4100, playerType: playerType.Man },
    ],
    rowTwoPassengers: [
      { time: 1000, playerType: playerType.Man },
      { time: 2000, playerType: playerType.Man },
      { time: 3000, playerType: playerType.Sumo },
      { time: 3800, playerType: playerType.Man },
    ],
    rowThreePassengers: [
      { time: 300, playerType: playerType.Man },
      { time: 1200, playerType: playerType.Man },
      { time: 3000, playerType: playerType.Man },
      { time: 3600, playerType: playerType.Man },
      { time: 4800, playerType: playerType.Man },
    ],
    timeToLeave: 12,
  },
  {
    '#': 8,
    rowOnePassengers: [
      { time: 1800, playerType: playerType.Man },
      { time: 3000, playerType: playerType.Sumo },
      { time: 3600, playerType: playerType.Man },
    ],
    rowTwoPassengers: [
      { time: 600, playerType: playerType.Man },
      { time: 1700, playerType: playerType.Man },
      { time: 3500, playerType: playerType.Man },
      { time: 3700, playerType: playerType.Man },
    ],
    rowThreePassengers: [
      { time: 1000, playerType: playerType.Man },
      { time: 1800, playerType: playerType.Sumo },
      { time: 2900, playerType: playerType.Man },
      { time: 3600, playerType: playerType.Man },
    ],
    timeToLeave: 11,
  },
  {
    '#': 9,
    rowOnePassengers: [
      { time: 1800, playerType: playerType.Man },
      { time: 1700, playerType: playerType.Man },
      { time: 3000, playerType: playerType.Sumo },
    ],
    rowTwoPassengers: [
      { time: 600, playerType: playerType.Man },
      { time: 3000, playerType: playerType.Man },
      { time: 3600, playerType: playerType.Man },
      { time: 4000, playerType: playerType.Man },
    ],
    rowThreePassengers: [
      { time: 1000, playerType: playerType.Man },
      { time: 1800, playerType: playerType.Sumo },
      { time: 3500, playerType: playerType.Man },
      { time: 4500, playerType: playerType.Man },
    ],
    timeToLeave: 13,
  },
  {
    '#': 10,
    rowOnePassengers: [
      { time: 1800, playerType: playerType.Man },
      { time: 1700, playerType: playerType.Man },
      { time: 3000, playerType: playerType.Sumo },
      { time: 4000, playerType: playerType.Man },
      { time: 6000, playerType: playerType.Man },
      { time: 7500, playerType: playerType.Man },
    ],
    rowTwoPassengers: [
      { time: 600, playerType: playerType.Man },
      { time: 3000, playerType: playerType.Man },
      { time: 3600, playerType: playerType.Man },
      { time: 4000, playerType: playerType.Man },
      { time: 4500, playerType: playerType.Man },
      { time: 5000, playerType: playerType.Sumo },
    ],
    rowThreePassengers: [
      { time: 1000, playerType: playerType.Man },
      { time: 1800, playerType: playerType.Sumo },
      { time: 3500, playerType: playerType.Man },
      { time: 3600, playerType: playerType.Man },
      { time: 4700, playerType: playerType.Man },
      { time: 6000, playerType: playerType.Man },
      { time: 7000, playerType: playerType.Man },
      { time: 7500, playerType: playerType.Man },
    ],
    timeToLeave: 13,
  },
];
