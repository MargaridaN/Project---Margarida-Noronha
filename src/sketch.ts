// -------------------
//  Parameters and UI
// -------------------
// @ts-nocheck
const gui = new dat.GUI()
const params = {
    Random_Seed: 0,
    Download_Image: () => save(),
}
gui.add(params, "Random_Seed", 0, 100, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------

function draw() {
    randomSeed(params.Random_Seed)
    background('white')
    noFill()
    for(let i=0; i<10; ++i){
        push() 
        const rand= random(4)
        if(rand <1){
        translate(-300,random(-500,500) ,random(-500,500) )
        }
        else if(rand<2){
            translate(300, random(-500, 500), random(-500, 500))
        }
        else {
            translate(random(-500, 500), -300, random(-500, 500))
        }

        box(random(10,200),random(10,200),random(10,200))
        pop()
        //strokeWeight(50)
        //line(100, height*0.8, width-100, height*0.8)
        rectMode(CENTER)
        strokeWeight(1) // Back to default
        //line(100, height*0.3, width-100, height*0.3)
        for(let i=0; i<200; ++i){
            //push()
            line(150, height*0.3, width-100, height*0.3)
            //line(height*0.20, 90, height*0.2, width -100)
            line(height*0.1, 90, height*0.3, width -100)
            line(height*0.09, 90, height*0.2, width -10)
            line(height*0.08, 90, height*0.2*0.2, width -10)
            
        }
    }
   
   
}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}