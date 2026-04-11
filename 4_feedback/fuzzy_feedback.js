hush()

s1.initScreen()

shape(4).blend(src(s1).scale(1.1),0.8).out(o1)
src(o1).blend(src(s1).scale(0.9),0.5).out(o3)

render(o3)
