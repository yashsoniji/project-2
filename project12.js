var selectorField = document.getElementById("selectorfield" );
var selectText = document.getElementById("selectText");
var options = document.getElementsByClassName("options");
var list = document.getElementById("list");
var icon = document.getElementById("aero-icon")


selectorField.onclick = function () {
    list.classList.toggle ("hide")
    icon.classList.toggle ("rotate")
}


for(option of options) {
    option.onclick = function () {
        selectText.innerHTML = this.textContent;
        list.classList.toggle("hide")
        icon.classList.toggle ("rotate")
  };
}


