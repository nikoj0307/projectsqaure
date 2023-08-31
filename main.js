function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(150,150);
    video=createCapture(VIDEO);
    video.hide();
}

function draw() {
image(video,230,150,220,200);
fill("#080808");
stroke("#080808");
circle(50,50,100);
circle(50,430,100);
circle(590,50,100);
circle(590,430,100);
fill("#080808");
stroke("#080808");
rect(90,40,460,20);
rect(90,420,460,20);
rect(40,90,20,300);
rect(580,90,20,300);
}

function take_snapshot(){
    save('myFilterImage.png');
}

