s0.initVideo("http://localhost:2345/2024-06-15 01-15-45.mkv");

//s0.initCam()

fps=60

// adjust the video brightness itself                   -0.1
src(s0).scale(1,1.5*innerHeight/innerWidth).brightness(-0).out(o3)

// this is one frame of overlay
src(o3)
  .brightness(0) // tune the overlay 0
  .luma(0.99,0) // try to keep this low, keep the color
  .add(solid(1,0,0).mask(src(o3).r().brightness(-0.25).sub(src(o3).g().brightness(-0.8)).thresh(0.9)))
  .out(o0);

// this persists the overlay
src(o1)
  .brightness(-0.01) // tune the decay -0.0008
  .add(src(o0).mask(src(o0).thresh(0.1).luma()))
  .out(o1)

src(o3).blend(src(o1).luma(0.1),0.5).out(o2)



//src(o3).r().sub(src(o3).g().brightness(-0.7)).thresh(0.9).out(o2)


render(o2);
