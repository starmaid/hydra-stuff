// Happy birthday June!
// Written by @starmaid 9-30-21

// camera with rainbows on dark areas
// overlaid with gir dancing dot gif

s0.initCam(); // start camera

// audio setup
a.show();
a.setBins(5);
a.setSmooth(0);

src(s0) // mess with camera feed settings
  .brightness(0)
  .contrast(1)
  .saturate(1)
  .out(o0);

s1.initVideo(
  "https://c.tenor.com/dd7nsu0ZbuoAAAPo/gir-invaderz-zm.mp4"
); // grab the gif as mp4 from tenor

// Gir dancing part
src(s1)
  .invert()
  .luma(0.1)
  .invert() // this invert-luma-invert makes the white areas transparent
  .scale(0.5) // zoom out
  .modulateScrollX(osc(2, 2, 1), 0.3, 0.2)
  .modulateScrollY(osc(1, 2), 0.2, 0.2) // make gir fly around
  .out(o1);

// Rainbows in shadows
osc(20, 1, 2) // get colors and speed of rainbow
  .rotate(1, 1) // make it spin
  .mask( // create a mask from dark areas of the camera feed
    src(o0)
      .thresh(() => a.fft[0] * 0.1) // make the intensity of rainbow based on audio
      .invert()
      .luma(0.1)
  )
  .out(o2);

// layer them in the proper order
// [base] <- camera <- rainbow <- gir
src(o0).layer(src(o2)).layer(src(o1)).out(o3);

render(o3);
