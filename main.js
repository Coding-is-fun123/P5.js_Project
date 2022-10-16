function preload(){

}
function setup(){
    canvas=createCanvas(600,600);
    canvas.position(300,300)
    video=createCapture(VIDEO);
    video.hide();
    
}
function draw(){
image(video,0,0,300,300);

circle(350,50,70);
fill("blue")
stroke("blue")

}

function take_snapshot(){
    save("student_name.png");
}