class   Partical {
    constructor(x,y,r) 
    {
    var  options ={
        restitution:0.3,
        friction:0.5,
        density:1.2,
        isStatic:false
    }
this.x=x;
this.y=y;
this.r=r;
this.body=Bodies.circle(this.x,this.y,this.r,options);
this.color=color(random(0,255),random(0,255),random(0,255));
World.add(world,this.body)
}
display(){
    var paperpos=this.body.position;

   
    
    
    
    fill(this.color)
    ellipseMode(RADIUS)
    ellipse(paperpos.x,paperpos.y,this.r,this.r)
  
}
}