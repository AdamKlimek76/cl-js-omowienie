const newElement = document.createElement("h1");
newElement.innerText = "Nowy element";

const myDiv = document.getElementById("my-div");
myDiv.appendChild(newElement);
// document.body.appendChild(newElement);

const pElement = document.querySelector("p");
const pElementClone = pElement.cloneNode(true);
document.body.appendChild(pElementClone);

const innerElement = document.getElementById("inner");
// innerElement.remove();
innerElement.parentElement.removeChild(innerElement);
