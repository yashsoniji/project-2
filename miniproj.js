let phone = document.getElementById("smartphone")
let laptop = document.getElementById("Laptop")
let hoodie = document.getElementById("Hoodie")
let coffe = document.getElementById("Coffe-Maker")
let blender = document.getElementById("Blender")
let tshirt = document.getElementById("T-Shirt")
let searchbar = document.getElementById("input-box")
let content = document.getElementById("content")

function search() {
    if(searchbar.innerText = phone ){
content.classList.add ("#smartphone")
    }else if(searchbar.innerText != phone){
content.classList.remove ("#smartphone")
    }
}
