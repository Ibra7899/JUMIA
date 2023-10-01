// product one 
var productOne = {
    img: "/images/pexels-dmitry-zvolskiy-1637859.jpg",
    name: "Toyota Vitz",
    price: 800000,
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, est?",
    id:"abcdefghijklmnopq"
}

// product two 
var productTwo = {
    img:"/images/pexels-negative-space-92904.jpg",
    name:"laptop",
    price:100000,
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quaerat?",
    id:"zzzzzzzzzzzzzzz"
}

// product three 
var productThree = {
    img:"/images/pexels-pixabay-416320.jpg",
    name:"Furnitures",
    price:2000000,
    desc:"furnitures for sale at a discount price",
    id:"wwwwwwwwwwwwwwwww"
}

// productOne 
document.getElementById("imgone").src = productOne.img;
document.getElementById("nameone").innerText = productOne.name;
document.getElementById("priceone").innerText = productOne.price;

document.getElementById("product$one").onclick = function (){

    window.location.href = "product.html" +"?"+ productOne.id;
}

// product two 
document.getElementById("imgtwo").src = productTwo.img;
document.getElementById("nametwo").innerText = productTwo.name;
document.getElementById("pricetwo").innerText = productTwo.price;

document.getElementById("product$two").onclick = function(){
    window.location.href = "product.html" +"?"+ productTwo.id;
}

// product three 
document.getElementById("img_3").src = productThree.img;
document.getElementById("name_3").innerText = productThree.name;
document.getElementById("price_3").innerText = productThree.price;

document.getElementById("product$three").onclick = function() {
    window.location.href ="product.html" +"?"+ productThree.id;
}