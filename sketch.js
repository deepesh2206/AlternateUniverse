var sun, planet1, planet2, planet3, planet4;

function setup(){
  createCanvas(1200,800);

  sun = createSprite(682,312,75,75);
  planet1 = createSprite(682,162,50,50);
  planet2 = createSprite(682,512,50,50);
  planet3 = createSprite(462,312,50,50);
  planet4 = createSprite(892,312,50,50);


  sun.shapeColor = "yellow";
  planet1.shapeColor = "grey";
  planet2.shapeColor = "orange";
  planet3.shapeColor = "blue";
  planet4.shapeColor = "red";

  sun.setCollider("circle",0,0,50);

}

function draw() {
  background(0); 
  
  if(World.frameCount%60 === 0){
    sun.width = sun.width + 25;
    sun.height = sun.height + 25;
  }

  if(isTouching(planet1,sun)){
    planet1.destroy();
  }

  if(isTouching(planet2,sun)){
    planet2.destroy();
  }

  if(isTouching(planet3,sun)){
    planet3.destroy();
  }

  if(isTouching(planet4,sun)){
    planet4.destroy();
  }
 
  drawSprites();
}

function isTouching(object1,object2){ 
  if(object1.x - object2.x < object2.width/2 + object1.width/2 
    && object2.x - object1.x < object2.width/2 + object1.width/2 
    && object1.y - object2.y < object2.height/2 + object1.height/2 
    && object2.y - object1.y < object2.height/2 + object1.height/2){ 
    return true;
  }
  else { 
    return false;
  }
}
