osc(50,0.05,4).kaleid(7).rotate(() => time/7).luma().scroll(0.45,0.68).out(o1)

src(o2).scale(1.02).colorama().brightness(-0.05).scroll(() => time/5 % 0.5, () => time/4 % 0.2).layer(src(o1).luma(0.5)).out(o2)

s1.initImage('http://localhost:2345/tree_mask.png')

src(o2).mask(src(s1)).out()

render(o0)