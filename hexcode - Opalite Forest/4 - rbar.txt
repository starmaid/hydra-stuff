// hexcode @ opalite forest 2022.01.05
// viz with ST4RM41D

a.setBins(5)
a.setScale(1)
a.setSmooth(0)

osc(10,0.5,2).mult(shape(4)
    .scale(1,2,0.05)
    .modulate(noise(10,5),() => a.fft[0]* 0.02))
  .out(o0)

src(o1).rotate(0.01).scale(1.1).modulate(o1).blend(o0,0.4).out(o1)

render(o1)