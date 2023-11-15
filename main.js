s1p = "";
s2h = "";

function preload(){
    s1p = loadSound("peter.mp3");
    s2h = loadSound("harry.mp3");
}

function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 600, 500);
}
