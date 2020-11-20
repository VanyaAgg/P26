class Bin {
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,width,height,{isStatic:true});
        this.image = loadImage("sprites/dustbingreen.png");
        
      this.x = x; 
      this.y = y;
      this.dustbinWidth = 200; 
      this.dustbinHeight = 215; 
      this.wallThickness = 20;

      this.bottomBody= Bodies.rectangle(this.x , this.y , this.dustbinWidth, this.wallThickness);
        this.leftBody = Bodies.rectangle(this.x - this.dustbinWidth/2 , this.y - this.dustbinHeight/2, this.wallThickness, this.dustbinHeight );
        this.rightBody = Bodies.rectangle(this.x + this.dustbinWidth/2 ,this.y - this.dustbinHeight/2, this.wallThickness, this.dustbinHeight);
   

        World.add (world,this.bottomBody);
        World.add (world,this.leftBody);
        World.add (world,this.rightBody);
console.log(this.body);
    }
    display(){
        var bottomPos = this.bottomBody.position;
        var leftpos = this.leftBody.position;
        var rightPos = this.rightBody.position;
        
        push();
        translate(leftpos.x, leftpos.y);
        //rotate(angle);
        rectMode(CENTER);
         pop();

         push();
         translate(rightPos.x, rightPos.y);
         //rotate(angle);
         rectMode(CENTER);
         pop();

         push();
         translate(bottomPos,bottomPos.y);
         //rotate(angle);
         imageMode(CENTER);
         image(this.image, 0, -this.dustbinHeight/2, this.dustbinWidth, this.dustbinHeight);
         pop();



    }
}