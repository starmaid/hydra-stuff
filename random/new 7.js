s0.initScreen();

src(s0)
.invert()
.luma(0.3).invert()
  .brightness(0)
  .contrast(1)
  .saturate(1.3)
  .luma(0.1,1e-6)
  .out(o0)

src(o1).scale(1.01).modulate(src(o1),0.001)
.saturate(1.1)
  .layer(src(o0).invert().luma(0.6).invert()).out(o1)

render(o1);