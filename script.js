const btn =document .querySelectorAll("#Themgio" )

btn.forEach(function(button,index){
button.addEventListener("click",function(event){{
var btnitem = event.target
var product = btnitem.parentElement
var productImg = product.querySelector("img").src
var productName = product.querySelector("H1").innerText
var productPrice = product.querySelector("#giatien").innerText

addcart(productPrice,productImg,productName)
}})

})
function addcart(productPrice,productImg,productName){
    var addtr = document.createElement("tr")
    var trcontent = productPrice 
    var carttable= document.querySelector(  "")
}


