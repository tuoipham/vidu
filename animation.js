// Make sure your code includes this line to setup a 400x400 pixel canvas

void setup(){ 
  size(800, 400); 
}

noStroke();

// position of the car
var x = 10;
var speed = 3;
var y = 20;
var speed1 = 10;
var z = 10;
var speed2 = 5;

    
draw = function() {
    drawCar(speed);       
};

function drawCar(speed){
    // all lines of code inside here will be run repeatedly
    background(56,10,2)
    
    // draw the car body
    fill(255, 0, 215);
    rect(x, 200, 100, 20);
    rect(x + 15, 178, 70, 40);
    
    // draw the wheels
    fill(97, 66, 66);
    ellipse(x + 25, 221, 45, 45);
    ellipse(x + 75, 221, 45, 45);
    
    if(x>=800){
        x = 10;
    }
    x = x + speed; 

    // draw the car body
    fill(355, 0, 115);
    rect(y, 200, 100, 20);
    rect(y + 15, 178, 70,40);
    
    // draw the wheels
    fill(97, 66, 66);
    ellipse(y + 25, 221, 35, 35);
    ellipse(y + 75, 221, 35, 35);
    
    if(y>=800){
        y = 10;
    }
    y = y + speed1; 

    fill(215, 0, 115);
    rect(z, 200, 100, 20);    
    rect(z + 15, 178, 70, 40);

    // draw the wheels
    fill(77, 66, 66);
    ellipse(z + 25, 221, 40, 40);
    ellipse(z + 75, 221, 40, 40);
    
    if(z>=800){
            z = 10;
        }
         z = z + speed2; 
}