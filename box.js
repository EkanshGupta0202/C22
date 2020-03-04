class Box{
constructor(x,y,w,h){
// add options such as friction and restitution. Experiment with the values
var options = {
    'restitution':0.8,
        'friction':1.5,
        'density':1.0
}
    this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w; 
      this.h = h;
      World.add(world, this.body);
}
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.w, this.h);
    pop();
    }
  }


// Create a show method which will draw the box every time it is called inside the draw method.
// remember to push and pop.
//this.show = function () {
    
        
   