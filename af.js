// navbar js-----------------------------
document.querySelector("#logo").addEventListener("click", logofunc);

function logofunc() {
  window.location.href = "afterlogin.html";
}
// upgrade
document.querySelector("#upgrade").addEventListener("click", function () {
  window.location.href = "pricing.html";
});

// serach bar css
document.querySelector("#searchbar").addEventListener("focus", changeStyle);

function changeStyle(event) {
  document.getElementById("search").style.borderBottom = "2px solid blue";
}
document
  .querySelector("#searchbar")
  .addEventListener("focusout", changeStyleBack);
function changeStyleBack(event) {
  document.getElementById("search").style.borderBottom = "1px solid black";
}

// category js---------------------------------
//  category color change on click
document
  .querySelector("#category>div:nth-child(1)")
  .addEventListener("click", colorChange);

function colorChange(event) {
  document.querySelector("#category>div:nth-child(1)").style.color = "blue";
  document.querySelector("#category>div:nth-child(2)").style.color = "grey";
  document.querySelector("#category>div:nth-child(3)").style.color = "grey";
  document.querySelector("#category>div:nth-child(4)").style.color = "grey";
  document.querySelector("#category>div:nth-child(5)").style.color = "grey";
  document.querySelector("#usersdata").innerHTML="";
  let h1 = document.createElement("h1");
  h1.innerText = "All Videos";
  let div1 = document.createElement("div");
  div1.innerHTML = "<p>+</p><p>New Video</p>";
  document.querySelector("#usersdata").append(h1, div1);
}
document
  .querySelector("#category>div:nth-child(2)")
  .addEventListener("click", colorChange2);

function colorChange2(event) {
  document.querySelector("#category>div:nth-child(2)").style.color = "blue";
  document.querySelector("#category>div:nth-child(1)").style.color = "grey";
  document.querySelector("#category>div:nth-child(3)").style.color = "grey";
  document.querySelector("#category>div:nth-child(4)").style.color = "grey";
  document.querySelector("#category>div:nth-child(5)").style.color = "grey";
  document.querySelector("#usersdata").innerHTML =
    "<h1>Create Instant Videos</h1>";
}
document
  .querySelector("#category>div:nth-child(3)")
  .addEventListener("click", colorChange3);

function colorChange3(event) {
  document.querySelector("#category>div:nth-child(3)").style.color = "blue";
  document.querySelector("#category>div:nth-child(1)").style.color = "grey";
  document.querySelector("#category>div:nth-child(2)").style.color = "grey";
  document.querySelector("#category>div:nth-child(4)").style.color = "grey";
  document.querySelector("#category>div:nth-child(5)").style.color = "grey";
  document.querySelector("#usersdata").innerHTML =
    "<h1>Tools to create videos</h1>";
}

document
  .querySelector("#category>div:nth-child(4)")
  .addEventListener("click", colorChange4);

function colorChange4(event) {
  document.querySelector("#category>div:nth-child(4)").style.color = "blue";
  document.querySelector("#category>div:nth-child(1)").style.color = "grey";
  document.querySelector("#category>div:nth-child(2)").style.color = "grey";
  document.querySelector("#category>div:nth-child(3)").style.color = "grey";
  document.querySelector("#category>div:nth-child(5)").style.color = "grey";
  document.querySelector("#usersdata").innerHTML =
    "<h1>Saved Templates to create videos</h1>";
}

document
  .querySelector("#category>div:nth-child(5)")
  .addEventListener("click", colorChange5);

function colorChange5(event) {
  document.querySelector("#category>div:nth-child(5)").style.color = "blue";
  document.querySelector("#category>div:nth-child(1)").style.color = "grey";
  document.querySelector("#category>div:nth-child(2)").style.color = "grey";
  document.querySelector("#category>div:nth-child(3)").style.color = "grey";
  document.querySelector("#category>div:nth-child(4)").style.color = "grey";
  document.querySelector("#usersdata").innerHTML = "<h1>Analytics</h1>";
}

window.addEventListener("load", colorChange);
