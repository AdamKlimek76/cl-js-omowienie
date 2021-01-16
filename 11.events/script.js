const myDiv = document.getElementById("my-div");
myDiv.addEventListener("click", function () {
    console.log("Kliknięto element");
});
myDiv.addEventListener("click", function (event) {
    console.log(event);
});
myDiv.addEventListener("mousemove", function () {
    console.log("Poruszono myszką nad elementem");
});

//////////////////////////////////////

const myButton = document.getElementById("my-button");
let clickCount = 0;
function myButtonClickHandler() {
    clickCount++;
    console.log(clickCount);
    if (clickCount === 10) {
        myButton.removeEventListener("click", myButtonClickHandler);
    }
}
myButton.addEventListener("click", myButtonClickHandler);

//////////////////////////////////////

const outer = document.getElementById("outer");
const inner = document.getElementById("inner");
outer.addEventListener("click", function (event) {
    console.log("Kliknięto element zewnętrzny")
    console.log("event.target:", event.target);
    console.log("this:", this);
});

inner.addEventListener("click", function (event) {
    console.log("Kliknięto element wewnętrzny")
    console.log("event.target:", event.target);
    console.log("this:", this);
    event.stopImmediatePropagation();
});

inner.addEventListener("click", function (event) {
    console.log("Kliknięto element wewnętrzny (obsługa 2)")
    console.log("event.target:", event.target);
    console.log("this:", this);
});

//////////////////////////////////////

const buttons = document.querySelectorAll(".btn");
for(let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function(event) {
        this.style.backgroundColor = "red";
    });
}

//////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
    console.log("Załadowano DOM");
});

//////////////////////////////////////

const link = document.getElementById("link");
link.addEventListener("click", function (event) {
    alert("Kliknięto link");
    event.preventDefault();
});

//////////////////////////////////////

const textInput = document.getElementById("textInput");
textInput.addEventListener("keypress", function (event) {
    console.log(event);
})

