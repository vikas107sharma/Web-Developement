
var a= Math.floor(Math.random()*6 +1);
var b= Math.floor(Math.random()*6 +1);

console.log(a);
console.log(b);

document.getElementsByClassName("img")[0].src="/images/dice" +  a + ".png";
document.getElementsByClassName("img")[1].src="/images/dice" +  b + ".png";

var tar=document.getElementById("heading")

if(a>b){
    tar.innerText="🚩 Player 1 wins!"
} else if(a< b){
    tar.innerText="Player 2 wins! 🚩"
} else {
    tar.innerText="Draw!";
}
   


