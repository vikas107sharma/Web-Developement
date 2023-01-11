// document.body.style.backgroundColor = "blue";
// $("body").css("background-color", "yellow");



// $("h1").css("color","red");      // setting values
// console.log($("h1").css("color"));  // getting values



// $("h1").addClass("big-title");



// $("h1").text("bye");
// $("button").text("don't click me");
// $("button").html("<em> clicked </em>");



// console.log($("img").attr("src"));   // getting attribute
// $("a").attr("href","https://www.yahoo.com");



// for (var i = 0; i < 5; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     document.querySelector("h1").style.color = "purple";
//   });
// }

// $("button").click(function(){
//     $("h1").css("color","blue");
// })



// $("input").keypress(function(event){
//     console.log(event.key);
//     $("h1").text(event.key);
// });

// $("h1").on("mouseover",function(){
//     $("h1").css("color","blue");
// });



// $("h1").before("<button>new button</button>")     before, after, prepend, append



$("button").on("click",function(){
    // $("h1").toggle();       // fadeToggle(),  slideToggle()
    // $("h1").animate({opacity: 0.5, margin: "20%"});
    $("h1").slideUp().slideDown().animate({opacity: 0.5, margin: "20%"});
});
