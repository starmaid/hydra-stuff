# DOCS

My personal docs for hydra.

## Reserved Variables

```
// write to
speed = 1   // seconds per second multiplier
fps = 60    // frames per second

// read from
time                // time since refresh in seconds
mouse.x             // x coordinate of mouse
mouse.y             // y coordinate of mouse
window.innerWidth   // width in pixels
window.innerHeight  // width in pixels
Math.PI

// getting mouse values normalized
x = ()=> mouse.x/innerWidth         // 0→1
y = ()=> mouse.y/innerHeight        // 0->1
x = ()=> (-mouse.x/innerWidth)+.5   // 0.5→-0.5
y = ()=> (-mouse.y/innerHeight)+.5  // 0.5→-0.5

osc( ({time}) => Math.sin(time) ).out()
osc(() => mouse.x).out(o0)
```

## Setups

```
s0.initCam()      // start camera
s1.initScreen()   // capture screen

a.hide()
a.show()
a.setBins(5)
a.setSmooth(0)

audio () => a.fft[0]

s2.initVideo()
s3.initImage()

setResolution(innerWidth/2, innerHeight/2)
```

### Basic Feedback

```
src(s0).out(o0)

src(o1).scale(1.1).brightness(-0.05).layer(src(o0).luma(0.5)).out(o1)

render(o1)
```

## All Functions

SRC

```
// src
src(source)
osc(freq, sync, offset)
noise(scale, offset)
voronoi(scale, speed, blending)
shape(sides, radius, smoothing)
gradient(speed)
solid(r, g, b, a)

// geometry
rotate(angle, speed)
scale(size, xmult, ymult)
pixelate(x, y)
repeat(repeatX, repeatY, offsetX, offsetY)
repeatX(reps, offset)
repeatY(reps, offset)
kaleid(nsides)
scroll(scrollX, scrollY, speedX, speedY)
scrollX(scrollX, speed)
scrollY(scrollY, speed)

// color
brightness
contrast
color vec4
colorama
invert
luma
posterize
saturate
shift
thresh

// blend
add
sub
layer
blend
mult
diff
mask

// modulate
modulateRepeat
modulateRepeatX
modulateRepeatY
modulateKaleid
modulateScrollX
modulateScrollY
modulate
modulateScale
modulatePixelate
modulateRotate
modulateHue

// external
initCam
initImage
initVideo
init
initStream
initScreen
```


## OSC

```
// osc( frequency, sync, offset )

osc(Math.PI*2,0,Math.PI/2)  // get a single rainbow that stretches the screen
```

## scale

Make any shapes generated even (squares, triangles)

```
scale(1,9/16.1)
```

## update

this function runs once a frame (determined by `fps`).

```
update = () => {
  console.log("hi");
}
```

## editor view

```
s1.initScreen()
solid(0.1,0.1,0.1).blend(src(s1),0.9).scale(1.05).out(o0)
```

## Remote Streams

In one computer, name the stream

```
pb.setName("myGraphics")
```

In another computer, list availible streams with `pb.list()` and load that named stream

```
s0.initStream("myGraphics")
src(s0).out()
```
