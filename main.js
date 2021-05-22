noseX = 0;
noseY = 0;
function preload(){
}
function setup(){
    canvas = createCanvas(400,300);
    canvas.position(566,368);
    Video = createCapture(VIDEO);
    Video.position(566,368);
    Video.size(400,300)
    
    pose_net = ml5.poseNet(Video,modelLoaded);
    pose_net.on('pose', gotPoses);
}
function modelLoaded(){
console.log("Model Loaded");
}

function gotPoses(result){
    if(result.length>0){
        console.log(result);
        console.log("nose x = " + result[0].pose.nose.x);
        console.log("nose y = " + result[0].pose.nose.y);
        noseX = result[0].pose.leftEye.x - 20;
        noseY = result[0].pose.leftEye.y - 15;
    }
    else{
        console.log("person not detected")
    }
}
function draw(){
    
}