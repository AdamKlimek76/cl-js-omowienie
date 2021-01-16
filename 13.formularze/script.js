const input1 = document.getElementById("input1");
input1.value = "Mój tekst";

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Zatwierdzenie formularza");
    console.log("Wartość pola formularza: " + input1.value);
});
console.dir(form);
