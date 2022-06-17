// navbar js-----------------------------
document.querySelector("#logo").addEventListener("click", logofunc)

function logofunc() {
    window.location.href = "afterlogin.html"
}
// serach bar css
document.querySelector("#searchbar").addEventListener("focus",changeStyle)

function changeStyle(event){
   document.getElementById("search").style.borderBottom="2px solid blue"
}
document.querySelector("#searchbar").addEventListener("focusout",changeStyleBack);
function changeStyleBack(event){
    document.getElementById("search").style.borderBottom="1px solid black"
 }


// category js---------------------------------
//  category color change on click
document.querySelector("#category>div:nth-child(1)").addEventListener("click",colorChange)

function colorChange(event){
   document.querySelector("#category>div:nth-child(1)").style.color="blue";
   document.querySelector("#category>div:nth-child(2)").style.color="grey";
   document.querySelector("#category>div:nth-child(3)").style.color="grey";
   document.querySelector("#category>div:nth-child(4)").style.color="grey";
   document.querySelector("#category>div:nth-child(5)").style.color="grey";
}
document.querySelector("#category>div:nth-child(2)").addEventListener("click",colorChange2)

function colorChange2(event){
   document.querySelector("#category>div:nth-child(2)").style.color="blue";
   document.querySelector("#category>div:nth-child(1)").style.color="grey";
   document.querySelector("#category>div:nth-child(3)").style.color="grey";
   document.querySelector("#category>div:nth-child(4)").style.color="grey";
   document.querySelector("#category>div:nth-child(5)").style.color="grey";
}
document.querySelector("#category>div:nth-child(3)").addEventListener("click",colorChange3)

function colorChange3(event){
   document.querySelector("#category>div:nth-child(3)").style.color="blue";
   document.querySelector("#category>div:nth-child(1)").style.color="grey";
   document.querySelector("#category>div:nth-child(2)").style.color="grey";
   document.querySelector("#category>div:nth-child(4)").style.color="grey";
   document.querySelector("#category>div:nth-child(5)").style.color="grey";
}

document.querySelector("#category>div:nth-child(4)").addEventListener("click",colorChange4)

function colorChange4(event){
   document.querySelector("#category>div:nth-child(4)").style.color="blue";
   document.querySelector("#category>div:nth-child(1)").style.color="grey";
   document.querySelector("#category>div:nth-child(2)").style.color="grey";
   document.querySelector("#category>div:nth-child(3)").style.color="grey";
   document.querySelector("#category>div:nth-child(5)").style.color="grey";
}

document.querySelector("#category>div:nth-child(5)").addEventListener("click",colorChange5)

function colorChange5(event){
   document.querySelector("#category>div:nth-child(5)").style.color="blue";
   document.querySelector("#category>div:nth-child(1)").style.color="grey";
   document.querySelector("#category>div:nth-child(2)").style.color="grey";
   document.querySelector("#category>div:nth-child(3)").style.color="grey";
   document.querySelector("#category>div:nth-child(4)").style.color="grey";
}