class Particles {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
        }
        this.height = 10;
        this.width=50;
        this.body = Bodies.rectangle(x, y, 50,10, options);
        //give color property 

        this.color=color(random(0,255),random(0,255),random(0,255))
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill(this.color);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }

};