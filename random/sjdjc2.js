fps = 25
setResolution(innerWidth/2,innerHeight/2)


osc(10,0.1,2.4).rotate(1,05).mask(shape(99).rotate(1,0.1)
  .scale(1,9/16,1).scale(() => 1+a.fft[0])).out(o1)

src(s2).invert().luma(0.4).out(o1)

s1.initScreen()
s2.initVideo("E:\\h\\vid\\lain-dance.mp4")

src(s1).scale(1.05).brightness(-0.01).layer(src(o1).luma(0.1),0.5).out()

bpm = 122

gradient(0.5,0,1).mask(shape(2)).scale(() => a.fft[0]).modulate(voronoi(5)).out(o1)

hush()
