function preload()
{
    img = loadImage('Garage.jpg');
}

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    video.size(380, 380);

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded()
{
    console.log("Model Loaded!");
}

function draw()
{
    image(img, 0, 0, 380, 380);
}
