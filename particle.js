class Particle {

    constructor(x, y) {
        
        this.x = x;
        this.y = y;
        this.radius = 10;
        

        this.body = Bodies.circle(this.x, this.y, this.radius);
        this.color = color(random(100, 255), random(100, 255), random(100, 255));
        World.add(world, this.body);

    }
    
    display() {
        var pos = this.body.position;

        push();
        translate(pos.x, pos.y);
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
    
}