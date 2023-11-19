# Three.js Notes

The Basics

https://github.com/rexmalebka/hydra-threejs/blob/main/README.md

```
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

// set up hydra to see the three object
s0.initTHREE(t)

// output it
src(s0).out(o0)
```

## Adding stuff

```
box = new THREE.Mesh(
  new THREE.BoxGeometry(1,1,1),
  new THREE.MeshPhongMaterial({color: 0x002311})
)
t.scene.add(box)

light = new THREE.DirectionalLight( 0xffffff, 3);
light.position.set(-1, 2, 4);
t.scene.add(light)
```

## Do something

SetInterval runs once every number of milliseconds

```
clearInterval(typeof move_f == 'undefined'? 0: move_f)
move_f = setInterval(()=>{
  box.rotation.x += 0.05
},50)
```

Hydra's update() function runs once every hydra frame

```
update = () => {
    box.rotation.x += 0.05
}
```