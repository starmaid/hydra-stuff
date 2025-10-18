
s0.initCam()

a.setScale(1)
a.setBins(5)
a.setSmooth(0)

src(s0)
  .modulatePixelate(
    noise(() => 3 - a.fft[0] * 1, 0)
    .pixelate(42,42),2000,32)
  .out()