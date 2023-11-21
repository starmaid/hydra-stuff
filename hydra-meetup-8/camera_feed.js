speed = 1   // seconds per second multiplier
fps = 20    // frames per second
dev = 2
setResolution(innerWidth/dev, innerHeight/dev)

shape(2).scale(0.6).repeat().scale(0.2).scrollY(0.1).out(o0)

src(o0).rotate(Math.PI/2).out(o1)

src(o0).layer(src(o1).luma(0.9)).out(o2)

render(o3)

s1.initVideo("https://media.tenor.com/xVgwv4_HWfMAAAPo/nature-tree.mp4")

//shape(2).scale(0.3).thresh().rotate(() => time).pixelate(15,15).sub(src(o2)).out(o3)

//src(s1).scale(0.8).mask(shape(4).scale(2.5)).repeat(2,2).thresh(0.6).luma(0.9).sub(src(o2)).out(o3)

//s2.initVideo("https://media.tenor.com/jW_r_TyMhNAAAAPo/looking-black-cat.mp4")

v = document.createElement("Video")
v.loop = true
v.volume = 0
v.playbackRate = 0.5
v.crossOrigin = "anonymous"
v.src = "https://media.tenor.com/jW_r_TyMhNAAAAPo/looking-black-cat.mp4"
s2.init({src: v})
src(s2).out()
v.play()

s1.initCam()

src(s2).scale(1.8).scroll(-0.05,-0.2).thresh(0.6,0).sub(src(o2)).layer(src(s1).luma(0.65)).out(o3)

