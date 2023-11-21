/*
fetch("https://raw.githubusercontent.com/rexmalebka/hydra-threejs/changes/hack/dist/hydra-three.js").then( x=> x.text() ).then(text=>{
  let script = document.createElement("script")
  script.innerHTML = text
  document.body.appendChild(script)
})
*/

// instanciate three plugin
t = new three()
var v = "https://va.media.tumblr.com/tumblr_s4e7r1OrjO1trxx91_720.mp4"
var v2 = "https://upload.wikimedia.org/wikipedia/commons/8/86/Starship_SN8_launch_render.webm"
var v2 = "https://upload.wikimedia.org/wikipedia/commons/2/28/Venus_Berlin_2023_138.webm"

var video, videoImage, videoImageContext, videoTexture;

init();
animate();

// FUNCTIONS 		
function init() 
{
	///////////
	// VIDEO //
	///////////
	
	// create the video element
	video = document.createElement( 'video' );
  	video.crossOrigin = "anonymous";
	video.src = v2;
	video.load(); // must call after setting/changing source
	video.play();
	
	// alternative method -- 
	// create DIV in HTML:
	// <video id="myVideo" autoplay style="display:none">
	//		<source src="videos/sintel.ogv" type='video/ogg; codecs="theora, vorbis"'>
	// </video>
	// and set JS variable:
	// video = document.getElementById( 'myVideo' );
	
	videoImage = document.createElement( 'canvas' );
	videoImage.width = 200;
	videoImage.height = 100;

	videoImageContext = videoImage.getContext( '2d' );
	// background color if no video present
	videoImageContext.fillStyle = '#000000';
	videoImageContext.fillRect( 0, 0, videoImage.width, videoImage.height );

	videoTexture = new THREE.Texture( videoImage );
	videoTexture.minFilter = THREE.LinearFilter;
	videoTexture.magFilter = THREE.LinearFilter;
	
	var movieMaterial = new THREE.MeshPhongMaterial( { map: videoTexture, side:THREE.DoubleSide} );
  
    movieMaterial.displacementMap = videoTexture
  	movieMaterial.displacementScale = 5

	// the geometry on which the movie will be displayed;
	// 		movie image will be scaled to fit these dimensions.
	var movieGeometry = new THREE.PlaneGeometry( 20,20,200,200);
	// create three js mesh (box)
    box = new THREE.Mesh(
        movieGeometry,
        movieMaterial
    )
    t.scene.add(box)
    
    box.rotation.x = 0.3
    box.rotation.y = 0.5
    box.rotation.z = 0.3
    
    
    light = new THREE.DirectionalLight( 0xffffff, 3);
    light.position.set(-1, 2, 4);
    t.scene.add(light)
  
  	t.camera.position.z = 50
}

function animate() 
{
    requestAnimationFrame( animate );
    box.rotation.x += 0.05
    box.rotation.y += 00
	render();		
}


function render() 
{	
	if ( video.readyState === video.HAVE_ENOUGH_DATA ) 
	{
		videoImageContext.drawImage( video, 0, 0 );
		if ( videoTexture ) 
			videoTexture.needsUpdate = true;
	}

	//t.renderer.render( t.scene, t.camera );
}



// create three js source on hydra
s0.initTHREE(t)


// output it
src(s0).out(o0)



