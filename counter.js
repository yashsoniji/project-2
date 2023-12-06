const maincontent = document.querySelector('counter-text');
let currentvalue = 0;

const btndecerement = document.querySelector("#Decerement")
const btnreset = document.querySelector("#reset")
const btnincrement = document.querySelector("#increment")

btnincrement.addEventListener("click",()=>{
    currentvalue = currentvalue =+1 
    maincontent .textContent = currentvalue
})
btnreset.addEventListener("click",()=>{
    currentvalue = currentvalue =0
    maincontent.textContent = currentvalue
    
})
btndecerement.addEventListener("click",()=>{
    currentvalue = currentvalue =-1
    maincontent.textContent = currentvalue

})