class Wall {
constructor(x,y,width,height){
    
var options={
density:50,
friction:5,
restitution:0.5,
isStatic:true,
}
//this.image=loadImage("sprites/dustbin.png")
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
World.add(world,this.body);
}
display(){
    //super.display();
var pos=this.body.position;
var angle=this.body.angle;
push();
fill("green");
translate(pos.x,pos.y);
rotate(angle);
rectMode(CENTER);
rect(pos.x,pos.y,this.width,this.height)
stroke("green");
strokeWeight(10);
pop();

}


}