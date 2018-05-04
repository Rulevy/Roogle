var pics = []
var circles = []
var bot = []
var topl = []

circles = document.querySelectorAll("circle")

document.querySelectorAll("image").forEach((img,i)=>{
   if( i > 2 ){
     pics.push(img)
   }
})

document.querySelectorAll("line").forEach((ln,i)=>{
   if( i % 2 == 0 ){
     // is even
     bot.push(ln)
   } else {
     // it's odd
     topl.push(ln)
   }
})

function clicked(idx){
  if( circles[idx].style.display == "block" ){
    circles[idx].style.display = "none"
    bot[idx].style.display = "none"
    topl[idx].style.display = "none"
  } else {
    circles[idx].style.display = "block"
    bot[idx].style.display = "block"
    topl[idx].style.display = "block"
  }

}


pics.forEach((pic,i)=>{
   pic.addEventListener("click",()=>{
     clicked(i)
   });
})
