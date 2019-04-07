export const createPassenger = (game, x, y, sprite, animation) => {
  const passenger = game.add.sprite(x, y, sprite);
  passenger.setScale(5);
  game.physics.add.existing(passenger);

  if (animation) {
    passenger.play(animation);
  }

  return passenger;
}
