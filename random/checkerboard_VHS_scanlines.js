shape(4).scale(1.65).out(o1)

src(o1).add(src(o1).scroll(0.5,0.5)).scale(1,innerHeight/innerWidth).scale(0.4).out(o2)

src(o2).modulatePixelate(osc(5)
        .rotate(3.14/2)
        .scale(1, 1, 1).modulateScrollY(osc(10).rotate(3.14/2),0.5,.1)
        , 500).out()