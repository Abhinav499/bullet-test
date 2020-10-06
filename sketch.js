var bullet, wall, speed, weight,thickness;
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50, 200,50, 25);
  bullet.velocityX=speed;
  bullet.shapeColor=color("white")
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background("black");  

  if(wall.x-bullet.x<(bullet.width+wall.width)/2){
  if(hascollided(bullet,wall)){

    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);
     if (damage>10){
      wall.shapeColor=color("red");
     }
     if (damage<10){
      wall.shapeColor=color("green");
      }
      console.log(damage);
    }
  }
  drawSprites();
}
function hascollided(ibullet,iwall){
bulletRightEdge=ibullet.x*ibullet.width;
wallLeftEdge=iwall.x;
if(bulletRightEdge>=wallLeftEdge){
  return true;
}
return false;
}