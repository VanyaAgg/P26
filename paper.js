class Paper{
constructor(x,y,radius){
    //inbuilt function which is used to initialize properties
    // add this. before property names 
    var options = {
        restitution: 0.3, isStatic: false, friction: 0.5, density: 1.2
    }

    this.body = Bodies.circle(x,y,radius,options);
    this.image = loadImage("sprites/paper.png");
    this.r = radius;
    
    World.add(world,this.body);
    console.log(this.body);
}
display(){
    var pos = this.body.position;
    push()
    translate(pos.x,pos.y)
    ellipseMode(RADIUS)


    
    fill("white");
    image(this.image,0,0,this.r,this.r);
   pop()
}

}