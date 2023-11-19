/*
fetch("https://raw.githubusercontent.com/rexmalebka/hydra-threejs/changes/hack/dist/hydra-three.js").then( x=> x.text() ).then(text=>{
  let script = document.createElement("script")
  script.innerHTML = text
  document.body.appendChild(script)
})
*/

// instanciate three plugin
t = new three()

//
t.scene
t.camera
t.renderer
t.DracoGLTFLoader // for .glb objects


webcam = document.createElement('video')

var constraints = { audio: false, video: { width: 640, height: 480 } }

navigator.mediaDevices
    .getUserMedia(constraints)
    .then(function (mediaStream) {
        webcam.srcObject = mediaStream
        webcam.onloadedmetadata = function (e) {
            webcam.setAttribute('autoplay', 'true')
            webcam.setAttribute('playsinline', 'true')
            webcam.play()
        }
    })
    .catch(function (err) {
        alert(err.name + ': ' + err.message)
    })

webcamCanvas = document.createElement('canvas')
webcamCanvas.width = 1024
webcamCanvas.height = 1024

canvasCtx = webcamCanvas.getContext('2d')
canvasCtx.fillStyle = '#000000'
canvasCtx.fillRect(0, 0, webcamCanvas.width, webcamCanvas.height)
webcamTexture = new THREE.Texture(webcamCanvas)
webcamTexture.minFilter = THREE.LinearFilter
webcamTexture.magFilter = THREE.LinearFilter


