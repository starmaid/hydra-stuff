shape(3).color(0,0,1).rotate(0,0.5).scale(1.5).scrollX(0,0.5).kaleid(3).rotate(0,0.5).out(o0)

osc(4,1,1).color(0.8,0.5,1).mask(shape(4).scale(2).rotate(0,0.4)).repeat(3).scrollX(0,-0.3).kaleid(5).rotate(0,-1).layer(src(o0).luma(0.01)).out(o1)

src(o2).modulate(voronoi(3,10)).scale(() => 1+a.fft[0]).layer(src(o1).luma(0.1)).posterize(6).out(o2)

s0.initCam()

src(o2).layer(src(s0).luma(0.3).posterize(15)).out(o3)

render(o3)