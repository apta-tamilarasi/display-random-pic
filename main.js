var btn=document.getElementById("btn")

var image=["image/1.jpg","image/2.jpg","image/3.jpg","image/4.jpg","image/5.jpg","image/6.jpg","image/7.jpg","image/8.jpg"]

var para=document.getElementById("para")
btn.addEventListener("click",function(){
    image.forEach(function(e){
       b= Math.floor(Math.random()*image.length)
       para.src=image[b]
   
       console.log(b)
    })
})