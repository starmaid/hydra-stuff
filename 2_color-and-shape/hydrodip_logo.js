fps = 30




colors = [solid(0.9,0,1), solid(55/255,0,0.5), solid(134/255,0,0.95), solid(60/255,218/255,1)]

solid(0,0,0).layer(colors[3].mask(osc(100,0,0.5).thresh())).layer(colors[0].mask(osc(50,0,0).thresh())).layer(colors[1].mask(osc(30,0,0.5).thresh())).layer(colors[2].mask(osc(80,0,0.5).thresh())).modulate(noise(3,0.1),0.1).mask(src(s0).scale(1500/innerWidth,1500/innerHeight)).layer(src(s1).scale(1500/innerWidth,1500/innerHeight)).out()

s0.initImage("http://127.0.0.1:8000/hydrodip_1_crop_insides_fullscreen.png")
s1.initImage("http://127.0.0.1:8000/hydrodip_1_crop_outline_fullscreen.png")


src(s0).scale(1000/innerWidth,1000/innerHeight)

src(s1).scale(1000/innerWidth,1000/innerHeight)

let loopcounter = 0;
update = () => {
  if (loopcounter < 5*30) {
    console.log("frame " + loopcounter);
    screencap()
    loopcounter = loopcounter + 1;
  }
}