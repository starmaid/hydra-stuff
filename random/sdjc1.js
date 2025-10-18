fps = 25


osc(10,0.1,2.4).rotate(1,05).mask(shape(99).rotate(1,0.1)
  .scale(1,9/16,1).scale(() => 1+a.fft[0])).kaleid(3).out(o1)

s1.initScreen()

src(s1).scroll(() => 0.5-a.fft[0], () => a.fft[0]).hue(0.1).brightness(-0.01).layer(src(o1).luma(0.1),0.5).out()

// hush()
