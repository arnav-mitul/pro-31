class p12{
    contructor( x , y ,r){
        var options={
            isStatic:true,
            restitution:0.4
        }
        this.r=r;
        this.body=Bodies.circle( x , y , r,options)
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255)
        ellipse(0,0,this.r,this.r);
        pop();
    }
    }