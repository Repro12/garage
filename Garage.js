img = "";
status = "";
objects = [];

function preload()
{
    img = loadImage('GarageParking.jpg');
}

function setup(){
    canvas = createCanvas(420, 380);
    canvas.center();

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
    status = true;
    
}

function gotResult(error, results)
{
    if(error)
    {
        console.log(error);
    }else{
    console.log(results);
    objects = results;
    }
}

function draw()
{
    image(video, 0, 0, 420, 380);

    if(status != "")
    {
        r = random(255);
        g = random(255);
        b = random(255);


        objectDetector.detect(img, gotResult);

         for (i = 0; i < objects.length; i++)
         {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of Object Detected are : " + objects.length;

            fill(r, g, b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x, objects[i].y);
            noFill();
            stroke(r, g, b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height,)
         }
    }
}