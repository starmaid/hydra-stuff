//fetch("https://raw.githubusercontent.com/rexmalebka/hydra-threejs/changes/hack/dist/hydra-three.js").then( x=> x.text() ).then(text=>{
//  let script = document.createElement("script")
//  script.innerHTML = text
//  document.body.appendChild(script)
//})

// instanciate three plugin
t = new three()

//
t.scene
t.camera
t.renderer
t.DracoGLTFLoader // for .glb objects

// create three js mesh (box)
box = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshPhongMaterial({color: 0x002311})
)
t.scene.add(box)

box.rotation.x = 0.3
box.rotation.y = 0.5
box.rotation.z = 0.3


light = new THREE.DirectionalLight( 0xffffff, 3);
light.position.set(-1, 2, 4);
t.scene.add(light)

// create three js source on hydra
s0.initTHREE(t)

// movements
clearInterval(typeof move_f == 'undefined'? 0: move_f)
move_f = setInterval(()=>{
  box.rotation.x += 0.05
  box.rotation.y += 0.05
},50)

// output it
src(s0).out(o1)

src(o0).scale(1.1).brightness(-0.05).layer(src(o1).luma(0.1)).out(o0)

render(o0)


