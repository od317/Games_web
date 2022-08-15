
let counter=1;
let per=0;
const slider=document.getElementById("slider");
setInterval(function(){
    
    per+=12.5;
    if(per==75+12.5){
        slider.style.transform="translateX(0%)";
        per=0;
    }
    else{
slider.style.transform="translateX(-"+per+"%)"; 
}
},3000)