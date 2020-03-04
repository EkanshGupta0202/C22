
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
 
var boxes = [];
var gSlider;
var ground;
 var ind;
function setup() {
    createCanvas(400, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);
 
    // A slider is already created for you here. This slider will dictate the gravity of the world
    
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 355);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    // Create a ground rectangle that would hold all the boxes and add it to the world.
    ground = new Ground(200,380,400,5);
    World.add(world,ground);
    
    
}
 
function mousePressed() {
    if (mouseY < 350) {
        // Every time a mouse press occures create a new box.
        boxes.push(new Box(mouseX,mouseY,30,50));
    
}
}

function draw() {
    // Draw all the elements including the slider that 

    background(0);
    Engine.update(engine);
    ground.display();
       //console.log(ind);
     //This is the value of your gravity. You can optionally show it to the viewer.
    var fVal = gSlider.value();
    text("Gravity " + fVal, 160, 381);
    // Use a for loop to show all the boxes
    for(var i = 0;i<boxes.length;i++){
        boxes[i].display();
   }
    
}
 

// You can either create a file for the class Box or build a simple function that creates one box at a time.
// I have gone for the second option.
//
