export const createAnimation = (
  key: string,
  frames: number,
  frameBaseName?: string,
  config?: Phaser.Animations.Types.Animation,
): Phaser.Animations.Types.Animation => (
  {
    key,
    frames: new Array(frames)
      .fill(null)
      .map(
        (_: null, i: number): Phaser.Animations.Types.AnimationFrame => ({
          key: `${frameBaseName || key}${i}`,
          frame: 0,
        }),
      ),
    frameRate: 8,
    repeat: -1,
    ...config,
  }
);
