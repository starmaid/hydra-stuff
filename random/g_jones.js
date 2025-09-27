speed = 1   // seconds per second multiplier
fps = 20    // frames per second
dev = 2
setResolution(innerWidth/dev, innerHeight/dev)

// vertical lines
shape(2).scale(0.6).repeat().scale(0.2).scrollY(0.1).out(o0)

// horizontal lines
src(o0).rotate(Math.PI/2).out(o1)

// grid
src(o0).layer(src(o1).luma(0.9)).scale(1,innerHeight/innerWidth).out(o2)

// load videos
s1.initVideo("https://media.tenor.com/xVgwv4_HWfMAAAPo/nature-tree.mp4")

//s2.initVideo("https://media.tenor.com/jW_r_TyMhNAAAAPo/looking-black-cat.mp4")
// this is how to slow down a video
v = document.createElement("Video")
v.loop = true
v.volume = 0
v.crossOrigin = "anonymous"
v.src = "https://media.tenor.com/jW_r_TyMhNAAAAPo/looking-black-cat.mp4"
v.play()
v.playbackRate = 0.5 // has to be after v.play
s2.init({src: v})

// pinwheel
// note the pixelate is dependent on resolution
shape(2).scale(0.3).thresh().rotate(() => time).pixelate(27,15).sub(src(o2)).out(o3)

// single tree
src(s1).scale(0.8).mask(shape(4).scale(2.5)).repeat(1,1).thresh(0.6).luma(0.9).sub(src(o2)).out(o3)

// 4 trees
src(s1).scale(0.8).mask(shape(4).scale(2.5)).repeat(2,2).thresh(0.6).luma(0.9).sub(src(o2)).out(o3)

// cat eyes
src(s2).scale(1.8).scroll(-0.05,-0.2).thresh(0.6,0).sub(src(o2)).out(o3)

render(o3)
