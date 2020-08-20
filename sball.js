class pincle{
    contructor( x , y ,r){
        var options={
            isStatic:false,
            restitution:0.4
        }
        this.r=r;
        this.body=Bodies.circle( x , y , r,options)
        this.color=color(random(0,255) , random(0,255) , random(0.255));
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(this.color)
        ellipse(0,0,this.r,this.r);
        pop();
    }
    }

