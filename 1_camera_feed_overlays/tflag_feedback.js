s0.initScreen();

osc(Math.PI * 2, 0, 2.5)
  .scrollX(0.35, 0)
  .scale(2)
  .color(1, 0, 1)
  .saturate(0.8)
  .brightness(0.3)
  .modulate(src(s0), 2)
  .modulatePixelate(
    noise(1, 0).pixelate(
      16,
      16
    ),
    1024,
    16
  )
  .out()


render(o1);