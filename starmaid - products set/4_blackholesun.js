s0.initCam()

pb.setName("nickProducts")

src(s0).scale(1,14/16).luma(0.3).out(o1)
src(s0).invert().luma(0.7).invert().out(o1)

src(o0).scale(() => a.fft[0]*0.3 + 1).color(0.9,0,0).brightness(-0.05).layer(src(o1)).out(o0)
