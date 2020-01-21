import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader'

@Component({
  selector: 'app-designer3-d',
  templateUrl: './designer3-d.component.html',
  styleUrls: ['./designer3-d.component.scss']
})
export class Designer3DComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.main()
  }

  main(){
    let tshirtObj;

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.z =70;

    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor( 0xaaaaaa );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    function setLighting(){
        var directionalLight1 = new THREE.DirectionalLight( 0xffffff,0.6 );
        var ambientLight = new THREE.AmbientLight( 0xffffff,0.8 );
        directionalLight1.target = tshirtObj;
        directionalLight1.position.set(0,0,0);
        scene.add(directionalLight1);
        scene.add(ambientLight);
    };


    function setMaterial(material){
      material = new THREE.MeshBasicMaterial();
    };

    var textureLoader = new THREE.TextureLoader();
    var texture = textureLoader.load("assets/designer/texture/Texture1.png");
    texture.flipY = false;

    const loader = new GLTFLoader();
    loader.load('assets/designer/tshirt/tshirt.gltf',
    (gltf) => {
        tshirtObj = gltf.scene;
        tshirtObj.traverse ( ( o ) => {
            if ( o.isMesh ) {
              o.material.map = texture;
            }
          });
        gltf.scene.scale.set( 1, 1, 1 );
        gltf.scene.position.x = 0;				    //Position (x = right+ left-)
        gltf.scene.position.y = -20;				    //Position (y = up+, down-)
        gltf.scene.position.z = 0;				    //Position (z = front +, back-)
        console.log("line 30 : object loaded successfully");
        console.log(tshirtObj);

        scene.add( gltf.scene );
        setLighting();
    },
    ( xhr ) => {
        // called while loading is progressing
        console.log( `${( xhr.loaded / xhr.total * 100 )}% loaded` );
    },
    (error) => {
        console.log(error);
    });

    var controls  = new OrbitControls(camera,renderer.domElement);
    controls.enablePan = false;

    function animate(){
        renderer.render(scene,camera);
        requestAnimationFrame(animate);
    }

    renderer.render(scene,camera);
    animate();
}

}
