// github univ 2020

a.hide()

fps = 60
speed = 1

shape(3,0.2,0.2).scale(() => 1.2+a.fft[0] )
.repeat(7,4)
.mult(osc(3,0.1,2.5))
.scrollX(() => a.fft[0]*0.01)
.kaleid(5)
.rotate(() => time/7)
.blend(src(s2).modulate(voronoi(5,1)),0.2)
.out(o0)

s1.initScreen()

src(o0).blend(src(s1),0.3).scale(0.95).out(o1)

s2.initVideo("https://media.tenor.com/5iQXp9N_3CQAAAPo/sunday-vec50.mp4")

initImage("C:\\Users\\star-tower\\Pictures\\Screenshot 2022-08-13 023318.png")



render(o1)
