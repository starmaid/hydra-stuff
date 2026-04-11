src(s0).out(o0)

bpm = 68

fps = 30

osc(10,0.08,5.5).hue([0.1, 0.4, 0.9]).modulateKaleid(voronoi(() => 2+ a.fft[1] * 30)).kaleid(3).scrollX( () => time * 0.3).rotate( () => time).rotate( () => time * 0.01).posterize(20).pixelate(480/8,640/8).out()

a.show()
a.setBins(10)

src(o1).scale(() => 1.1 + a.fft[0] * 0.3).brightness(-0.05).layer(src(o0).luma(0.5)).out(o1)

render(o1)