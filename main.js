function preload(){
}
function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(350, 250);
    fill(204, 101, 192);
    rect(65, 20, 510,30 );
    fill(0,128,0);
    circle(40,35,50);
    fill(204, 101, 192);
    rect(25, 60, 30,350 );
    fill(0,128,0);
    circle(40,435,50);
    fill(204, 101, 192);
    rect(65, 420,510,30 );
    fill(0,128,0);
    circle(600,435,50);
    fill(204, 101, 192);
    rect(585, 60, 30,350 );
    fill(0,128,0);
    circle(600,35,50);
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 70,60, 500, 350);
}
function take_snapshot(){
    save("Selfie.png")
}