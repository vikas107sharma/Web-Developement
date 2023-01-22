

// for(var i=0;i<document.querySelectorAll(".drum").length;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//         console.log(this.innerText);
//         playAudio(this.innerText);
//         animate(this.innerText);
//     })
// }

$(".drum").click(function(){
    console.log(this.innerText);
    playAudio(this.innerText);
    animate(this.innerText);       
})

// document.addEventListener("keypress",(event)=>{
//     playAudio(event.key);
// })
$("body").keypress((event)=>{
    playAudio(event.key);
})


// function animate(key){
    //     document.getElementsByClassName(key)[0].classList.add("pressed");
    //     setTimeout( ()=>{ document.getElementsByClassName(key)[0].classList.remove("pressed") } ,100)
    // }
function animate(key){
    $("."+key).addClass("pressed");
    setTimeout( ()=>{ $("."+key).removeClass("pressed") } ,100)
}


function playAudio(event){
    switch (event){
        case "w":
            var audio= new Audio("/sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio= new Audio("/sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio= new Audio("/sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio= new Audio("/sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio= new Audio("/sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio= new Audio("/sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio= new Audio("/sounds/kick-bass.mp3");
            audio.play();
            break;
        default:
            console.log(event);
    }
}