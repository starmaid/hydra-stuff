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

```


## OSC

```
// osc( frequency, sync, offset )

osc(Math.PI*2,0,Math.PI/2)  // get a single rainbow that stretches the screen
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