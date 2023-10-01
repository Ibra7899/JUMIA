var queryString = decodeURIComponent(window.location.search);
// console.log(queryString);
var carriedId = queryString.slice(1);
// console.log(carriedId);



var productOne = {
    img:"/images/pexels-dmitry-zvolskiy-1637859.jpg",
    name:"Toyota Vitz",
    price:800000,
    desc:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi, est?",
    id:"abcdefghijklmnopq"
}

// product two 
var productTwo = {
    img:"/images/pexels-negative-space-92904.jpg",
    name:"laptop",
    price:100000,
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quaerat?",
    id:"zzzzzzzzzzzzzzz",
}

// product  Three
var productThree = {
    img:"/images/pexels-pixabay-416320.jpg",
    name:"Furnitures",
    price:2000000,
    desc:"furnitures for sale at a discount price",
    id:"wwwwwwwwwwwwwwwww"
}


// product one 
if(carriedId === productOne.id){
    document.getElementById("productimg").src = productOne.img;
    document.getElementById("productname").innerText = productOne.name;
    document.getElementById("productprice").innerText = productOne.price;
    document.getElementById("productdesc").innerText = productOne.desc;

    var mainProduct = document.getElementById("mainproduct");
    var hFive = document.createElement("h5");
    mainProduct.appendChild(hFive);

    document.getElementById("quantity").onkeyup = function(){

        var quantity = document.getElementById("quantity").value;
        var total = productOne.price * quantity;

        hFive.innerHTML = total;
 
        function outputmessage(name, total){
            document.getElementById("outputmessage").innerHTML = `Dear ${name} your total price is ${total}`;
        }
        outputmessage('Customer', total)
    }
}

// product two 
if(carriedId === productTwo.id){
    document.getElementById("productimg").src = productTwo.img;
    document.getElementById("productname").innerText = productTwo.name;
    document.getElementById("productprice").innerText = productTwo.price;
    document.getElementById("productdesc").innerText = productTwo.desc;

    var mainProduct = document.getElementById("mainproduct");
    var hFive = document.createElement("h5");
    mainProduct.append(hFive);
    
    document.getElementById("quantity").onkeyup = function(){
        var quantity = document.getElementById("quantity").value;
        var total = productTwo.price * quantity;
        
        hFive.innerHTML = total;

        function output(name, total){
            document.getElementById("outputmessage").innerHTML = `Dear ${name}, your total price is ${total}`; 
        }
        output('customer', total)
    }

}

// product three 
if(carriedId === productThree.id){
    document.getElementById("productimg").src = productThree.img;
    document.getElementById("productname").innerText = productThree.name;
    document.getElementById("productprice").innerText = productThree.price;
    document.getElementById("productdesc").innerText = productThree.desc;

    var mainProduct = document.getElementById("mainproduct");
    var hFive = document.createElement("h5");
    mainProduct.append(hFive);

    document.getElementById("quantity").onkeyup = function(){
        var quantity = document.getElementById("quantity").value;
        var total = quantity * productThree;

        hFive.innerHTML = total;
        
        function output(name, total){
            document.getElementById("outputmessage").innerHTML = `Dear ${name}, your total amount is ${total}`
        }
        output('customer', total)
    }
}


