Webcam.set({
    width:300, height:300, image_format: 'png', png_quality: 90,
    constraints: {
        facingMode:"environment"
    } 
});
camera=document.getElementById("camera")
Webcam.attach("camera")
function takesnapshot(){
    Webcam.snap(function(image_url){
        document.getElementById("camera_result").innerHTML="<img id='cap_img' src='"+image_url+"'>";
    });
}
console.log("ml5version",ml5.version);
classifier=ml5.imageClassifier("MobileNet",modelloaded);
function modelloaded(){
    console.log("model loaded");
}
function identifyimage(){
    img=document.getElementById("cap_img");
    classifier.classify(img, getresult);
}
function getresult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        document.getElementById("object_name").innerHTML=result[0].label;
    }
}