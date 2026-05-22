solid(0.5,0.2,0.1).layer(solid(0.1,0.1,0.1)
  .layer(osc(150,0,0).brightness(-0.1).thresh(0.9).posterize(2).thresh(0.1).luma().modulate(noise(8,0.05).brightness(-0.3)))
  .mask(shape(4).thresh().scale(1,5,1))).out()