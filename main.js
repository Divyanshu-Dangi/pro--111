Webcam.set({
width:350,
height:300,
image_format:'png',
png_quality:90
});
mycam=document.getElementById("camera");
Webcam.attach(mycam);
function take_snapshot(){
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";
        
    })
}
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/CGk25bM_X/model.json',modelloaded);

function modelloaded()
{
    console.log("model is loaded");
}
function speak()
{
    var sin=window.speechSynthesis;
    speak_data_1="the first prediction is "+prediction_1;
    speak_data_2="the second prediction is "+prediction_2;
    var utterthis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    sin.speak(utterthis);
}
