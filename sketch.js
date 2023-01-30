//already specified code
let canvas;

//Add DOM element Button
let button;


//already specified code
let leftHand = 0;
let rightHand = 0;


//state of tama
let dancing = false;

//already specified code
let dandeX;
let dandeY;
let dandeDiam;


function setup(){
  //already specified code
  canvas = createCanvas(500, 500);
  canvas.parent("sketch-container"); //move our canvas inside this HTML element

  
  
  dandeX = width/2;
  dandeY = height/2;
  dandeDiam = width/6;

  //already specified code
  addGUI();
  
}

function draw(){
  background(255,165,0);
  
  //Drawing
  noStroke();

  //Manage state of Tama
  fill(255);

  

  //already specified code
  //draw Tama and closed mouth
  circle( dandeX,dandeY,dandeDiam);
  stroke(255);
  strokeWeight(4);
  //fill(0);
  
  line(dandeX,dandeY,width/2,height/2+200);

  //already specified code
  if(leftHand > 0 && rightHand > 0 ){

    //Tama Eat-new
    moveeyes();

    //draw food-old
    fill(100);
    line(dandeX,dandeY,leftHand,400);
    line(dandeX,dandeY,rightHand,400);

  } else{
    dancing = false;
  }
}

function moveeyes(){
  fill(0);
  circle(dandeX-20,dandeY-5,dandeDiam/6);
  circle(dandeX+20,dandeY-5,dandeDiam/6);
  
  if(dandeX>0){
    dandeX --;
  
  } else if(dandeX>width) {
    dandeX ++;
  }
  
}



function addGUI()
{
  //add a button
  button = createButton("Dance");
  //Put button into GUI container
  button.parent("gui-container");
  //Reference connecting css class to html to p5.js
  button.addClass("button");

  //Add custom function
  button.mousePressed(handleButtonPress);
}

function handleButtonPress(){
  if(!dancing){
  dancing = true;
  leftHand = random(180,80);
  rightHand = random(330,450); 
  }
  
}

