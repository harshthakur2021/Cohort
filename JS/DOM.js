//   setTimeout(() => {
//   console.log("This runs after 2 seconds");
// }, 2000);

// setInterval(() => {
//   console.log("This runs every 1 second");
// }, 1000);

// Pillars of DOM

// 1. Changing HTML
//  2. Changing CSS
//  3.  Selection oF an Element
//  4.  Event Listener

 var a = document.querySelector("h1")
 console.log(a)

  var a= document.querySelector("h1")
  a.innerHTML = "Harsh Thakur Associate Software Engineer"
  a.style.color= "Red"

 // Event Listener 
 // >> Hum apne Website pr Kuch krenge click drag unko sunke phir koi
 // >> react krega wla

a.addEventListener("click", function(){
  console.log ("hey")
})