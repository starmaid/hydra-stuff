let hydraCanvas = document.getElementById("hydra-bg");
// set small size to avoid high resource demand:
hydraCanvas.width  = Math.min(window.innerWidth  / 2, 1280);
hydraCanvas.height = Math.min(window.innerHeight / 2, 720);

const hydra = new Hydra({
  canvas: hydraCanvas,
  detectAudio: false,
  enableStreamCapture: false,
});

fetch("https://raw.githubusercontent.com/rexmalebka/hydra-threejs/changes/hack/dist/hydra-three.js").then( x=> x.text() ).then(text=>{
  let script = document.createElement("script")
  script.innerHTML = text
  document.body.appendChild(script)
})

t = new three()

//s1.initVideo("https://va.media.tumblr.com/tumblr_o23qprDvjp1r9bymd_480.mp4")

var v = "https://va.media.tumblr.com/tumblr_s4e7r1OrjO1trxx91_720.mp4"

s1.initVideo(v)

src(s1).invert().thresh(0.95,0.05).out(o1)

src(o0).scale(1.1).layer(src(o1).luma()).out(o0);

render(o0)