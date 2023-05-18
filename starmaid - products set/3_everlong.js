s0.initCam()

pb.setName("nickProducts")

fps=50

src(o0).scale(() => a.fft[1] + 1.1).brightness(-0.1).modulateScrollX(src(o1), 0.1).saturate(2).layer(src(s0).scale(1,14/16).brightness(-0.2).luma(0.2, 0.4)).out(o0)

osc(20,0.2).rotate(Math.PI * 0.5).pixelate().out(o1)

render(o0)
