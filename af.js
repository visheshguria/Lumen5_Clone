document.querySelector("#search>input").addEventListener("click",changeStyle)

function changeStyle(event){
    event.preventDefault()
  let input= document.querySelector("#search>input").style.border-radius;  
  input="none"
}