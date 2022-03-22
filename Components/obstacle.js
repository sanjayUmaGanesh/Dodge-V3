AFRAME.registerComponent('summonobstacle', {
    schema: {
        
    },

    init: function () {
     
      for (var i = 1; i <= 20; i++) {
        var rand = Math.round(Math.random(1,3))

        console.log(rand)
        if(rand === 1){
            var posX = -13
        }
        else if(rand === 2){
            var posX = 0
        }
        else{
            var posX = 13
        }
        //id
        var id = `obst${i}`;
  
        //position variables
        //var posX = -13;
        var posY = Math.round(Math.random(1,2))//Math.random() * 2 + -1;
        var posZ = Math.round(Math.random(-150,-170)) + -1000;
        
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
       
        this.spawnobstacle(id, position)
      }
    },

    spawnobstacle: function(id, position){
        var scene = document.querySelector("#scene")
        var obs = document.createElement('a-entity')
        obs.setAttribute("id",id)
        obs.setAttribute("position", position)
        obs.setAttribute('animation',`property: position; to: ${position.x} 0 100;easing:linear; loop: true; dur: 8600`)
        obs.setAttribute("gltf-model","#obst4")
        obs.setAttribute("scale",{x:0.1,y:0.1,z:0.1})

        scene.appendChild(obs)
    },

    calculatePosition: function(){
        
    }

});
