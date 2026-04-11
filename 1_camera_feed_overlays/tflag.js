// Happy birthday June!
// Written by @starmaid 9-30-21

// trans colors filter
// pixelation is controlled by bass intensity

s0.initCam(); // start camera

a.show(); // show audio fft on bottom right corner
a.setBins(5); // set number of bins for fft
a.setSmooth(0); // set audio input smoothing

osc(Math.PI * 2, 0, 2.5) // color pallete selection
  // change first and third values to change colors.
  .scrollX(0.35, 0)
  .scale(2) //scroll and scale shorten range of color selected
  .color(1, 0, 1) // remove green from colors
  .saturate(0.8) // decrease saturation a bit
  .brightness(0.3) // increase brightness
  .modulate(src(s0), 2) // replace the colors from the camera with colors from the gradient
  .modulatePixelate(
    noise(() => 3 - a.fft[0] * 2.9, 0).pixelate(
      // use a.fft[] to grab a section of the audio input
      // and control the amount of pixelation
      16,
      16
    ),
    1024,
    16
  )
  .out();
