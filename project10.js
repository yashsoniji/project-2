var thankspopup = document.getElementById('thanks-text');
const btn = document.getElementById('submitbtn');
const emailtext = document.getElementById('email-inp');
const submitform = document.getElementById('submit');

 emailtext.addEventListener('input', ()=> {
  if(emailtext.value.length < 0){
   thankspopup.classList.add = "submitbtn"
  }
 })

 btn.addEventListener('click',()=>{
  emailtext.textContent
 })