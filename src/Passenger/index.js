export const createPassenger = (game, x, y, sprite, animation, hp = 1) => {
  const passenger = game.add.sprite(x, y, sprite);
  passenger.setScale(5);
  passenger.hp = hp;
  game.physics.add.existing(passenger);

  if (animation) {
    passenger.play(animation);
  }

  return passenger;
}
