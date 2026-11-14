const bulb = document.querySelector(".bulb");
const buttonOn = document.querySelector("#on");
const popSound = new Audio("dragon-studio-mouse-click-sound-376877.mp3");

let flag = true;
buttonOn.addEventListener("click",()=>{
     popSound.currentTime = 0;
     popSound.play();
    if(flag){
        bulb.style.backgroundColor = "#dcd5d5e7";
        bulb.style.boxShadow = "0px -10px 30px 20px #b6b6afd4";
        bulb.style.border = "2px solid #6d6d3d00";
        buttonOn.innerText = "Off";
        buttonOn.style.backgroundColor = "gray";
        flag = false;                                       
    }else{
        bulb.style.backgroundColor = "transparent";
        bulb.style.boxShadow = "none";
        bulb.style.border = "2px solid #252424";
        buttonOn.innerText = "On";
        buttonOn.style.backgroundColor = "";
        flag = true;
    }
});

