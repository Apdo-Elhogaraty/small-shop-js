var items = document.querySelectorAll(".buy");
var sales = document.querySelector(".sales div");
var show = document.querySelector(".show-price");
var priceSpan = document.querySelector(".sales span");
var totalPrice = 0;
items.forEach(function(ele){
    ele.addEventListener("click",()=>{
        var name = ele.getAttribute("name")
        sales.innerHTML += `<span class"sale">${name}<span>`;
        var price = parseInt(ele.getAttribute("price"))
        totalPrice += price;
    })
})
show.addEventListener("click",()=>{
    priceSpan.innerHTML = totalPrice + "$";
})