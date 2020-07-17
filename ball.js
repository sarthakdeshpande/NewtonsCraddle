class Ball{
    constructor(x,y){
        var ball_options ={
            isStatic:false,
            restitution : 0.3,
            density:1.2,
            friction:0.5  
        }
        this.radius = 40;
        this.body = Bodies.circle(x,y,this.radius,ball_options);
            
        World.add(world,this.body);
        
    }
    
        display(){
            var pos =this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            ellipseMode(RADIUS); 
            ellipse(0,0,this.radius,this.radius);           
            pop();
        }
}