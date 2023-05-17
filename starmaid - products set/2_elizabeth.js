s0.initCam(0)

s1.initVideo("http://localhost:2345/bebop.m4v")

s1.src.currentTime = 100

src(s1).modulate(noise(0.5)).brightness(-0.5).layer(src(s0).posterize(10).luma(0.2)).out(o0)

render(o0)