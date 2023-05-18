s0.initCam()

pb.setName("nickProducts")

fps=15

src(o0).brightness(-0.01).layer(src(s0).saturate().color(1,0.8,0.8).posterize(5).luma(0.4)).out()