a.show()
a.setBins(5)
a.setScale(1)
a.setSmooth(0)


osc(10,0,2).mult(shape(100)
    .scale(1,0.7,0.7).diff(shape(100)
    .scale(1,0.65,0.65))
    .modulate(noise(10,5),() => a.fft[0]* 0.005))
  .out(o0)

src(o1).blend(o0,0.9).out(o1)

render(o1)