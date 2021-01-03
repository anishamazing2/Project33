class Ground {
    constructor(x, y, width, height, color) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x, y, width, height,options);
      this.width = width;
      this.height = height;
      this.color = color;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      strokeWeight(0);
      fill(this.color);
      rect(pos.x, pos.y, this.width, this.height);
      
    }
  };