class Bob{
   constructor(x,y){
       var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0.5,
		density:1.2
	}
    this.x=x;
    this.y=y;

    this.body=Bodies.circle(this.x,this.y,40,ball_options);
    World.add(world,this.body);
   }

   display(){
      var pos=this.body.position
      push();
      translate(pos.x,pos.y) 
      ellipse(0,0,40,40);
      pop();
   }



}
