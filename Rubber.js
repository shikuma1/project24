// class Rubber{
//     constructor(x,y,width,height){
//         var options = {
//             restitution: 0.3,
//             friction: 5.0,
//             density: 1.0

//           }
//         this.body = Bodies.circle(x,y,radius, options)
//         this.radius = radius
//         World.add(world,this.body)
//     }
//     display(){
//         var pos = this.body.position;
//         var angle = this.body.angle;
//         push();
//         translate(pos.x,pos.y);
//         rotate(angle);
//         ellipseMode(RADIUS)
//         strokeWeight(4)
//         fill("black");
//         elipse(0,0,this.width);
//         pop();
//     }
// }