let but=document.querySelector('.c');
but.addEventListener("click",function(){
   let h3 =document.querySelector("h3");
   let randomcolor = getcolor();
   h3.innerText=randomcolor;
   let div = document.querySelector("div");
   div.style.backgroundColor = randomcolor;
});
function getcolor(){
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}
let reset = document.querySelector('.b');
reset.addEventListener("click",function(){
 let h3 = document.querySelector("h3");
 let  a= `generate random color`; 
 h3.innerText=a; 
 let div = document.querySelector("div");
 div.style.backgroundColor = "white";
});