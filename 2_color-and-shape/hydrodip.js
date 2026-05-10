fps = 10


colors = [solid(0.9,0,1), solid(55/255,0,0.5), solid(134/255,0,0.95), solid(60/255,218/255,1)]

solid(0,0,0).layer(colors[3].mask(osc(100,0,0.5).thresh())).layer(colors[0].mask(osc(50,0,0).thresh())).layer(colors[1].mask(osc(30,0,0.5).thresh())).layer(colors[2].mask(osc(80,0,0.5).thresh())).modulate(noise(3,0),0.1).out()

// screencap()
  
// modulatePixelate(noise(3,0),0,150).out()
