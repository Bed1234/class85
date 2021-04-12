canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");


image_array=["mars.jpg","mars1.jpg","mars2.jpg","mars3.jpg"];
random_number=Math.floor(Math.random()* 4);
console.log(random_number);


rover_width= 100;
rover_height= 90;


background_image = image_array[random_number];
console.log("background_image ="+ background_image);
rover_image="rover.png";

rover_X=10;
rover_Y=10;


function add(){
  background_imgTag=new Image();
  background_imgTag.onload=uploadbackground;
  background_imgTag.src=background_image;



  rover_imgTag=new Image();
  rover_imgTag.onload=uploadrover;
  rover_imgTag.src=rover_image;
}


function uploadbackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadrover(){
    ctx.drawImage(rover_imgTag,rover_X,rover_Y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed== '38'){
        up();
        console.log("Up");
    }

    if(keyPressed== '40'){
        down();
        console.log("Down");
    }


    if(keyPressed== '37'){
        Left();
        console.log("Left");
    }


    if(keyPressed== '39'){
        right();
        console.log("Right");
    }

}


function up(){
    if(rover_Y>=0){
        rover_Y=rover_Y-10;
        console.log("When up arrow is pressed, x = " + rover_X + " | y = " +rover_Y);
        uploadbackground();
        uploadrover();
    }
}




function down(){
    if(rover_Y<=500){
        rover_Y=rover_Y+10;
        console.log("When down arrow is pressed, x = " + rover_X + " | y = " +rover_Y);
        uploadbackground();
        uploadrover();
    }
}



function Left(){
    if(rover_X>=0){
        rover_X=rover_X-10;
        uploadbackground();
        uploadrover();
    }
}


function right(){
    if(rover_X<=700){
        rover_X=rover_X+10;
        uploadbackground();
        uploadrover();
    }
}