class tree{
    constructor(x,y,w,h){
var options={
    isStatic:false
}
this.x=x;
this.y=y;
this.w=w;
this.h=h;
this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);
    }
    display(){
        var treepos=this.body.position;
        push()
			translate(treepos.x, treepos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(255,255,0)
			rect(0,0,this.w, this.h);
			pop()
    }
}