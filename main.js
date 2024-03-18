status = ""

function setup(){
    canvas = createCanvas(300, 250);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 250);
    video.hide();
}

function start(){
object_detector = ml5.objectDetector("cocossd", modelLoaded);
document.getElementById("status").innerHTML = "Status: Detecting Objects";
input_text = document.getElementById("input_id").value;
}

function modelLoaded(){
    console.log("model_loaded");
    status = true
}

function draw(){
    image(video, 0, 0, 300, 250);
}