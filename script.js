let displayText = "Value";
const display = document.getElementById("display");


const pad = document.getElementsByClassName("pad");

let myFunction = function() {
    let attribute = this.getAttribute("data-value");
    let textNode = document.createTextNode(attribute);
    display.appendChild(textNode);
};

for (var i = 0; i < pad.length; i++) {
    pad[i].addEventListener('click', myFunction, false);
}


