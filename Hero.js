class Hero {
    constructor(x,y){
        var options = {
            restitution:0.1,
            density:0.08,
            friction:0.006
        
        }
        this.body = Bodies.circle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image =loadImage("images/Superhero-01.png");
        World.add(world, this.image);
    }
    display(){
        
        push();
        
        
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}