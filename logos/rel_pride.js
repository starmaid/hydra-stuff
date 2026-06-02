fps = 30

s0.initImage("http://localhost:8000/logo_crop.png")

setResolution(innerWidth/2, innerHeight/2)

scalefactor = 1

osc(10,0.5,2).rotate(1.2).modulate(noise(3)).mask(src(o1)).out()

src(s0).scale(1* scalefactor,innerHeight/innerWidth).mask(shape(4).scale(3.32* scalefactor,innerHeight/innerWidth).luma(0.9)).out(o1)
