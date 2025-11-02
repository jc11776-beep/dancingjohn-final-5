/*
  Check our the GOAL and the RULES of this exercise at the bottom of this file.
  
  After that, follow these steps before you start coding:

  1. rename the dancer class to reflect your name (line 35).
  2. adjust line 20 to reflect your dancer's name, too.
  3. run the code and see if a square (your dancer) appears on the canvas.
  4. start coding your dancer inside the class that has been prepared for you.
  5. have fun.
*/

let dancer;

function setup() {
  // no adjustments in the setup function needed...
  let canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("p5-canvas-container");

  // ...except to adjust the dancer's name on the next line:
  dancer = new dancingjohn(width / 2, height / 2);
}

function draw() {
  // you don't need to make any adjustments inside the draw loop
  background(0);
  drawFloor(); // for reference only

  dancer.update();
  dancer.display();
  dancer.move();
}

// You only code inside this class.
// Start by giving the dancer your name, e.g. LeonDancer.
class dancingjohn {
  constructor(startX, startY) {
    this.x = startX;
    this.y = startY;
    this.arm = 0;
  }


  update() {
    // update properties here to achieve
    // your dancer's desired moves and behaviour
    this.x = this.x + 2;
    this.y = this.y - 1;
    this.arm += -cos(frameCount * 0.15) * .2;
  }
  move() {
    this.y = height / 2 + 30 * sin(frameCount * 0.1);
    this.x = width / 2 + 30 * cos(frameCount * 0.1);

  }

  display() {
    // the push and pop, along with the translate 
    // places your whole dancer object at this.x and this.y.
    // you may change its position on line 19 to see the effect.
    push();
    translate(this.x, this.y);

    // ******** //
    // ⬇️ draw your dancer from here ⬇️
    // TORSO 
    fill(128, 50, 128);
    rect(-35, -51, 70, 78, 8);

    // LEFT ARM 
    push();
    translate(-36, -35);
    rotate(this.arm);
    fill(226, 163, 121);
    ellipse(0, 20, 20, 55);
    ellipse(0, 50, 16, 16);
    pop();

    // RIGHT ARM 
    push();
    translate(37, -35);
    rotate(this.arm);
    fill(226, 163, 121);
    ellipse(0, 20, 20, 55);
    ellipse(0, 50, 16, 16);
    pop();

    // LEGS 
    push();
    translate(0, 40);

    // LEFT LEG
    push();
    translate(-15, 0);
    rotate(sin(frameCount * 0.25) * 0.5);
    fill(165, 42, 42);
    rect(-19, -12, 31, 70, 10);
    fill(105, 105, 105);
    rect(-19, 55, 30, 15, 5);
    pop();

    // RIGHT LEG
    push();
    translate(15, 0);
    rotate(-sin(frameCount * 0.25) * 0.5);
    fill(165, 42, 42);
    rect(-9, -12, 31, 70, 10);
    fill(105, 105, 105);
    rect(-8, 55, 30, 15, 5);
    pop();

    pop();

    // HEAD 
    push();
    translate(this.head / 5, this.head / 3);
    fill(226, 163, 121);
    ellipse(0, -80, 60, 65);

    // HAIR
    fill(42, 26, 10);
    arc(0, -95, 70, 60, PI, 0);

    // EYES 
    fill(255);
    ellipse(-12, -80, 12, 8);
    ellipse(12, -80, 12, 8);
    fill(40, 80, 200);
    ellipse(-12, -80, 5, 5);
    ellipse(12, -80, 5, 5);

    // NOSE 
    fill(226, 163, 121);
    triangle(-3, -75, 0, -70, 3, -75);

    // MOUTH
    noFill();
    stroke(120, 40, 40);
    strokeWeight(2);
    arc(0, -65, 25, 15, 0, PI);
    noStroke();

    pop();
  }
}




// ⬆️ draw your dancer above ⬆️
// ******** //

// the next function draws a SQUARE and CROSS
// to indicate the approximate size and the center point
// of your dancer.
// it is using "this" because this function, too, 
// is a part if your Dancer object.
// comment it out or delete it eventually.
//this.drawReferenceShapes()






// drawReferenceShapes() {
noFill();
stroke(255, 0, 0);
line(-5, 0, 5, 0);
line(0, -5, 0, 5);
stroke(255);
rect(-100, -100, 200, 200);
fill(255);
stroke(0);





/*
GOAL:
The goal is for you to write a class that produces a dancing being/creature/object/thing. In the next class, your dancer along with your peers' dancers will all dance in the same sketch that your instructor will put together. 

RULES:
For this to work you need to follow one rule: 
  - Only put relevant code into your dancer class; your dancer cannot depend on code outside of itself (like global variables or functions defined outside)
  - Your dancer must perform by means of the two essential methods: update and display. Don't add more methods that require to be called from outside (e.g. in the draw loop).
  - Your dancer will always be initialized receiving two arguments: 
    - startX (currently the horizontal center of the canvas)
    - startY (currently the vertical center of the canvas)
  beside these, please don't add more parameters into the constructor function 
  - lastly, to make sure our dancers will harmonize once on the same canvas, please don't make your dancer bigger than 200x200 pixels. 
*/