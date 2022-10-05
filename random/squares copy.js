s1.initScreen()

osc(40,0.1,2).mask(shape(4)).scale(0.7,9/16.1).repeat(7,5).scale(() => 1+a.fft[3]*0.2).luma().add(src(s1).scale(0.9).rotate(0.015),0.9).out()


s1.initScreen()
fps = 30
osc(200,0.01,1).mask(shape(4).scale(1.3,9/16,1).repeat(5,5).luma()).scale(() => 1+a.fft[3]*0.2).out(o0)

src(s1).brightness(-0.01).scale(0.9).rotate(0.03).layer(src(o0)).out(o1)

render(o1)


s1.initScreen()
fps = 60
speed = 0.8
osc(20,0.01,0.1).mask(shape([3,4,90]).scale(1.3,9/16,1).luma()).scale(() => 1+a.fft[0]*0.4).out(o0)

src(s1).brightness(-0.4).scale(0.9).kaleid([3,5,7,9]).rotate(() => time/3).layer(src(o0)).out(o1)

render(o1)
