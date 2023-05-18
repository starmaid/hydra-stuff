s0.initCam(0)

pb.setName("nickProducts")

s1.initVideo("http://localhost:2345/bebop.m4v")

s1.src.currentTime = 100

src(s1).modulate(noise(0.5)).brightness(-0.5).layer(src(s0).scale(1,14/16).invert().posterize(10).luma(0.5)).out(o0)

render(o0)