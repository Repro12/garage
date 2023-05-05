function preload()
{
    img = loadImage('Garage.jpg');
}

function setup(){
    canvas = createCanvas(420, 380);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    video.size(420, 380);

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded()
{
    console.log("Model Loaded!");
}

function draw()
{
    image(img, 0, 0, 420, 380);
}
