noseX=0;
noseY=0;
function preload(){
clown_image=loadImage('https://i.postimg.cc/ZqjtS2JX/mustace.jpg');
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    Posenet=ml5.poseNet(video,modelloaded);
    Posenet.on('pose',gotposes);
}
function draw(){
image(video,0,0,300,300);
image(clown_image,noseX,noseY,30,30);
}
function take_snapshot(){
    save("myFilterImage.png");
}
function modelloaded(){
    console.log('posenet is initialise');
}
function gotposes(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-197;
        noseY=results[0].pose.nose.y-122;
        console.log("nose x="+ noseX);
        console.log("nose y="+ noseY);

    }
}

